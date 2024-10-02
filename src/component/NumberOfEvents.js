import React, { useState } from 'react';

const NumberOfEvents = () => {
  const [numEvents, setNumEvents] = useState(33);

  const handleInputChanged = (event) => {
    const value = event.target.value;
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