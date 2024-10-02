import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../component/NumberOfEvents';
import EventList from '../component/EventList';
import { getEvents } from '../api';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent, EventListComponent;
  
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
    EventListComponent = render(<EventList events={[]} />);
  });

  // Scenario 1: 33 events are shown by default
  test('renders 33 events by default when no number is specified', async () => {
    const allEvents = await getEvents();
    
    // Ensure the input's default value is 33
    expect(NumberOfEventsComponent.getByRole('textbox').value).toBe('33');

    // Render only the first 33 events
    EventListComponent.rerender(<EventList events={allEvents.slice(0, 33)} />);
    
    // Ensure the EventList shows 33 events by default
    expect(EventListComponent.getAllByRole('listitem')).toHaveLength(33);
  });

  // Scenario 2: The user can change the number of events
  test('user can change the number of events to display', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();

    // Simulate changing the number of events to 10
    const input = NumberOfEventsComponent.getByRole('textbox');
    await user.clear(input); // Clear the input
    await user.type(input, '10'); // Type 10 into the input field

    // Rerender the EventList with the new number of events
    EventListComponent.rerender(<EventList events={allEvents.slice(0, 10)} />);
    
    // Ensure the input value changed to 10
    expect(input.value).toBe('10');

    // Ensure the EventList now shows only 10 events
    expect(EventListComponent.getAllByRole('listitem')).toHaveLength(10);
  });
});