import { render, waitFor, within, } from '@testing-library/react';
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import Event from '../component/Event';

 
const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test('An event element is collapsed by default', ({ given, when, then }) => {    
    let AppDOM;
    given('user is on the app', () => {                                                                   
      AppDOM = render(<App />).container.firstChild;                                                                                            
    });                                                                                                   
                                                                                                          
    when('the app display list of events', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItem = within(EventListDOM).getAllByRole('listitem');
        expect(EventListItem).toHaveLength(35);
      });
    });

    then('the user should see the event element collapsed by default.', () => {
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
  
  test('User can expand an event to see details', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given('the app is and events details are hidden', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    });

    when('the user click the show event button', async () => {
      const user = userEvent.setup();
      const showDetails = EventComponent.queryByText('Show Details');
      await user.click(showDetails);
    });

    then('the user should see the hidden event expand to view.', async () => {
      await waitFor(() => {
        const eventDetails = EventComponent.container.querySelector('.eventDetails');
        expect(eventDetails).toBeInTheDocument();
      });
    });
  });
  
  test('User can collapse an event to hide details.', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given('the event is expanded and it\'s visible', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
    });

    when('user click then hide event button', async () => {
      const user = userEvent.setup();
      const hideDetails = EventComponent.queryByText('Hide Details');  
      await user.click(hideDetails); 
    });

    then('user should see the event collapse and hidden', () => { 
      const eventDetails = EventComponent.container.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument(); 
    });
  });
});