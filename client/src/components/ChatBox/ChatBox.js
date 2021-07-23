import React from "react";
import "./ChatBox.scss";
import * as FaIcons from "react-icons/fa";

function ChatBox() {
  return (
    <div className="container">
      <div className="chatbox">
        <div class="top-bar">
          <div class="avatar">
            <p>P</p>
          </div>
          <div class="name">PAULETA</div>

          <div class="menu">
            <div class="dots"></div>
          </div>
        </div>

        <div class="middle">
          <div class="chat">
            <div class="incoming">
              <div class="bubble">
                Fala blazer, to com uma verruga na virilha...
              </div>
              <div class="bubble">Tem algum remedio pra recomendar?</div>
            </div>
            <div class="outgoing">
              <div class="bubble lower">Tenho sim</div>
              <div class="bubble">
                Ouvi falar que saliva eh mto bom pra curar isso, principalmente
                se for de algum amigo, rs.
              </div>
            </div>
            <div class="typing">
              <div class="bubble">
                <div class="ellipsis one"></div>
                <div class="ellipsis two"></div>
                <div class="ellipsis three"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="chat">
            <input type="text" placeholder="Type a message" />
            <button type="submit">
              <FaIcons.FaTelegramPlane className="fas fa-paper-plane"></FaIcons.FaTelegramPlane>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
