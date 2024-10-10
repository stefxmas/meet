import { useState } from "react";

const Event = ({event}) => {
  const [showDetails, setshowDetails] = useState(false);  
  return (
      <li>
        <div className="eventSummary">
<p>{event.summary}</p>
<p>{event.location}</p>
<p>{event.start?.dateTime}</p>
<p>{event.end?.dateTime}</p>
</div>

<div className="eventDetails">
  {showDetails ? (
   <p>{event.description}</p>     
      ) : null}
      </div>
      <button>onClick={() => setshowDetails(!showDetails)} {showDetails ? "Hide" : "Show"}</button>
      </li>
    );
  }
  
  export default Event