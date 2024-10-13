/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';

const NumberOfEvents = ({currentNOE = 33, setCurrentNOE}) => {
  const [ numEvents, setNumEvents] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
    setNumEvents(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        className="number"
        role="textbox"
        value={numEvents}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;