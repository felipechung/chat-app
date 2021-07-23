import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login-container">
      <div className="input-container">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="room" />
      </div>
      <div className="button-container">
        <button>Enter chat</button>
      </div>
    </div>
  );
}

export default Login;
