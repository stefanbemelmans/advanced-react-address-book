

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";
import 'react-select/dist/react-select.css';

let currentUser;

function selectUser(user) {
  currentUser = user;
  console.log(currentUser);
  render();
}

function render() {
  ReactDOM.render(
    <App users={users} getUser={selectUser} curUser={currentUser} />,
    document.getElementById("root")
  );
}
render();
