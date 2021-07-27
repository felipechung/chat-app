import React, { useState, useEffect } from "react";
import "./ChatBox.scss";
import * as FaIcons from "react-icons/fa";
import api from "../../services/api";
import { useParams } from "react-router-dom";

function ChatBox() {
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const [messageList, setMessageList] = useState([
    {
      key: id,
      room: id,
      content: {
        message: "",
      },
    },
  ]);
  const [room, setRoom] = useState({});

  useEffect(() => {
    api
      .get(`${id}/`)
      .then((response) => {
        setRoom(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleChangeMessage(event) {
    setMessage(event.target.value);
  }

  function handleSendMessage(event) {
    event.preventDefault();
    setMessageList({
      room: id,
      content: {
        message: message,
      },
    });
    console.log(message);
  }

  return (
    <div className="container">
      <div className="chatbox">
        <div className="top-bar">
          <div className="avatar">
            <p>{room.name ? room.name[0].toUpperCase() : ""}</p>
          </div>
          <div className="name">{room.name}</div>

          <div className="menu">
            <div className="dots"></div>
          </div>
        </div>

        <div className="middle">
          <div className="chat">
            {messageList.map((msg) => (
              <div className="incoming">
                <div className="bubble">{msg.content.message}</div>
              </div>
            ))}
            {/* <div className="incoming">
              <div className="bubble">
                Fala blazer, to com uma verruga na virilha...
              </div>
              <div className="bubble">Tem algum remedio pra recomendar?</div>
            </div> */}
            <div className="outgoing">
              <div className="bubble lower">Tenho sim</div>
              <div className="bubble">
                Ouvi falar que saliva eh mto bom pra curar isso, principalmente
                se for de algum amigo, rs.
              </div>
            </div>
            <div className="typing">
              <div className="bubble">
                <div className="ellipsis one"></div>
                <div className="ellipsis two"></div>
                <div className="ellipsis three"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="chat">
            <form onSubmit={handleSendMessage}>
              <input
                className="chat-input"
                type="text"
                placeholder="Type a message"
                onChange={handleChangeMessage}
              />
              <button className="chat-button" type="submit">
                <FaIcons.FaTelegramPlane className="fas fa-paper-plane"></FaIcons.FaTelegramPlane>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
