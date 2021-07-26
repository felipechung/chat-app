import React from "react";

import { Link } from "react-router-dom";

function Room(props) {
  return (
    <>
      <Link to={`/${props.roomId}`} className="room">
        <div className="room-name-container">
          <span class="room-name">{props.name}</span>
        </div>
        <div className="room-description-container">
          <span className="room-description">{props.description}</span>
        </div>
      </Link>
    </>
  );
}

export default Room;
