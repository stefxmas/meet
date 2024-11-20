import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import CitySearch from './component/CitySearch';
import NumberOfEvents from './component/NumberOfEvents';
import EventList from './component/EventList';
import { InfoAlert, ErrorAlert, WarningAlert } from './component/Alert';
import  CityEventsChart  from './component/CityEventsChart';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState();
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState(""); // Corrected typo here

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert(""); // Set the warning alert message to an empty string
    } else {
      setWarningAlert("You are currently offline. Some features may not be available."); // Set the warning alert message to a non-empty string
    }
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} /> 
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} /> 
      <div className="charts-container">
      <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
}

export default App;