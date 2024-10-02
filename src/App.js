// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import EventList from './component/EventList';
import CitySearch from './component/CitySearch';
import NumberOfEvents from './component/NumberOfEvents';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList/>
      <NumberOfEvents/>
    </div>
  );
}

export default App;

