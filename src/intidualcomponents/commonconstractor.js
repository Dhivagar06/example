import React, { useState } from "react";
import { Qwe } from "../inticer/beendate";

function Commonstructor(props) {
  const [message, setMessage] = useState(null);

  const handleImageClick = () => {
    const clickedId = props.id; // Get the id from the props

    // Filter for all items with the matching id in Qwe
    const matches = Qwe.filter((item) => item.id === clickedId);

    if (matches.length > 0) {
      // Cycle through the matching images one by one
      const currentIndex = matches.findIndex((item) => item.url === props.url);
      const nextIndex = (currentIndex + 1) % matches.length;
      setMessage(`Clicked image with id: ${clickedId}, URL: ${matches[nextIndex].url}`);
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
