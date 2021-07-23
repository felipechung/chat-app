import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ChatBox from "./components/ChatBox/ChatBox";
import Login from "./components/Login/Login";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
