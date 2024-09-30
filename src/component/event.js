import { useState } from "react";

const Event = ({event}) => {
  const [showDetails, setshowDetails] = useState(false);  
  return (
      <li>
<p>{event.summary}</p>
<p>{event.location}</p>
<p>{event.start?.dateTime}</p>
<p>{event.end?.dateTime}</p>
<button>onClick={() => setshowDetails(!showDetails)} {showDetails ? "Hide" : "Show"}</button>
  {showDetails ? (
   <p>{event.description}</p>     
      ) : null}
      </li>
    );
  }
  
  export default Event;