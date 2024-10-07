import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';


import './App.css';
import CitySearch from './component/CitySearch';
import NumberOfEvents from './component/NumberOfEvents';
import EventList from './component/EventList';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} />
      <NumberOfEvents />
      <EventList events={events}/>
    </div>
  );
}

export default App;

