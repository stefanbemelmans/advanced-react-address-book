

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";

let currentUser = users[0];

function selectUser(user){
  currentUser = user;
}

function render() {
  ReactDOM.render(
    <App users={users} getUser={(user) => selectUser(user)} curUser = {currentUser} />,
    document.getElementById("root")
  );
}
render();
