import React, { useState } from "react";
import { Qwe } from "../inticer/beendate";

function Commonstructor(props) {
  const [message, setMessage] = useState(null);

  const handleImageClick = () => {
    const clickedId = props.id; // Get the id from the props

    // Check if the clicked image's id matches any id in Qwe
    const match = Qwe.find((item) => item.id === clickedId);

    if (match) {
      setMessage(`Clicked image with id: ${clickedId}`);
    } else {
      setMessage("Not found");
    }
  }

  return (
    <div>
      <h1>{props.heading}</h1>
      <img
        src={props.url}
        alt="image"
        onClick={handleImageClick}
      />
      {message && <p>{message}</p>}
    </div>
  );
}

export default Commonstructor;
