import { React } from "react";
import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

function Room(props) {
  function handleJoinPrivateRoom() {
    const password = prompt("Enter Password");
    let login = {
      id: props.roomId,
      password: password,
    };

    axios
      .post("http://02fad2a28f9c.ngrok.io/chat", login)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {props.private ? (
        <li onClick={handleJoinPrivateRoom} className="room">
          <div className="room-name-container">
            <span className="room-name">{props.name}</span>
            <FaIcons.FaLock />
          </div>
          <div className="room-description-container">
            <span className="room-description">{props.description}</span>
          </div>
        </li>
      ) : (
        <li
          onClick={() => {
            props.history.push(`${props.match.url}${props.roomId}`);
          }}
          className="room"
        >
          <div className="room-name-container">
            <span className="room-name">{props.name}</span>
          </div>
          <div className="room-description-container">
            <span className="room-description">{props.description}</span>
          </div>
        </li>
      )}
    </>
  );
}

export default withRouter(Room);
