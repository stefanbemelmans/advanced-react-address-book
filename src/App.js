import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from './components/ListOfUsers';
import UserDetail from './components/UserDetail';
function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
       <ListOfUsers users={props.users} /> 
       <UserDetail user={props.users[0]} />
    </div>
  );
}

export default App;
