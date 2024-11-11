/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';

const NumberOfEvents = ({currentNOE, setCurrentNOE, setErrorAlert}) => {
  const [ numEvents, setNumEvents] = useState(currentNOE);
  
  const handleInputChanged = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value <= 0) {
      setErrorAlert("Please enter a number greater than 0");
    } else {
      setErrorAlert(""); // Clear error message if input is valid
      setNumEvents(value);
      setCurrentNOE(value); // Update the number of events in parent component
    }
    
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="number"
        role="textbox"
        value={numEvents}
        onChange={handleInputChanged}
      />

        {/* {errorMessage && <div className="error-message">{errorMessage}</div>} */}
    </div>
  );
};

export default NumberOfEvents;

