/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';

const NumberOfEvents = ({currentNOE = 33, setCurrentNOE}) => {
  const [ numEvents, setNumEvents] = useState(currentNOE);
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChanged = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value <= 0) {
      setErrorMessage("Please enter a number greater than 0");
    } else {
      setErrorMessage(""); // Clear error message if input is valid
      setNumEvents(value);
      setCurrentNOE(value); // Update the number of events in parent component
    }
    
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

        {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default NumberOfEvents;