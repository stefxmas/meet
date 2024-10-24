import { render, within, waitFor } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('33 events are showed by default', ({ given, when, then }) => {
    let AppComponent;


    given('user open the app', () => {
      AppComponent = render(<App />);
    });

    when('user doesnt specify a number', () => {});

    then('33 events are shown by default', async () => {
      await waitFor(() => {
        const EventListItems = within(AppComponent.container).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32); // Adjust if necessary based on mock data
      });
    });
  });

  test('The user can change the number of events', ({ given, when, then }) => {
    let AppComponent;

    given('that the user opens the app', () => {
      AppComponent = render(<App />);
    });

    when('the user specifies a number of events', async () => {
      const user = userEvent.setup();
      const numberOfEventsInput = AppComponent.container.querySelector('.number'); // Select the input field using the class

      await user.clear(numberOfEventsInput); // Clear the input field
      await user.type(numberOfEventsInput, '3'); // Type '3' to set the number of events to 3
    });

    then('specified number of events are shown', async () => {
      await waitFor(() => {
        const EventListItems = within(AppComponent.container).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(3); // Expect 3 events to be displayed
      });
    });
  });
});