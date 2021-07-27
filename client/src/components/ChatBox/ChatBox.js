import React, { useState, useEffect } from "react";
import "./ChatBox.scss";
import * as FaIcons from "react-icons/fa";
import api from "../../services/api";
import { useParams } from "react-router-dom";

function ChatBox() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [room, setRoom] = useState({});

  const { id } = useParams();

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
            <div className="incoming">
              <div className="bubble">
                Fala blazer, to com uma verruga na virilha...
              </div>
              <div className="bubble">Tem algum remedio pra recomendar?</div>
            </div>
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
            <input
              className="chat-input"
              type="text"
              placeholder="Type a message"
            />
            <button className="chat-button" type="submit">
              <FaIcons.FaTelegramPlane className="fas fa-paper-plane"></FaIcons.FaTelegramPlane>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
