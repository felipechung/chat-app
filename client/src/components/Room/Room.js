import React from "react";

import { Link } from "react-router-dom";

function Room(props) {
  return (
    <>
      <Link to={`/${props.roomId}`} className="room">
        <div className="room-name-container">
          <span class="room-name">Sala secreta</span>
        </div>
        <div className="room-description-container">
          <span class="room-description">Essa eh uma sala secreta</span>
        </div>
      </Link>
    </>
  );
}

export default Room;
