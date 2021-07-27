import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatBox from "./components/ChatBox/ChatBox";

import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={ChatBox} />
      </Switch>
    </div>
  );
}

export default App;
