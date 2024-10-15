import { render } from '@testing-library/react';
// import { getEvents } from '../api';
import mockData from '../mock-data';
import Event from '../component/Event';
import React from 'react';
// import EventList from '../components/EventList';

describe('<Event /> component', () => {
  let EventComponent;
 beforeEach(() => {
   EventComponent = render(<Event event={mockData[0]} />);
 })
  
 test('has an element with "list" role', () => {
  expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
});


});