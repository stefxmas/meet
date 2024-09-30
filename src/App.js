// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import EventList from './component/EventList';
import CitySearch from './component/CitySearch';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList/>
    </div>
  );
}

export default App;

