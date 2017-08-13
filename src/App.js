import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from './components/ListOfUsers';
import UserDetail from './components/UserDetail';
import Select from 'react-select';

// var Select = require('react-select');

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

function logChange(val) {
  console.log("Selected: " + JSON.stringify(val));
}


//import Select from "react-select";

//filter the options based on buttons, build the array to send to the select element. 
function App(props) {
  
  let names = props.users.map((x) => {
    return {
      value:x.first_name, 
      label:x.first_name
    }
    });
  console.log(names)
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
       <ListOfUsers users={props.users} getUser={props.getUser} /> 
       console.log(props)
         <UserDetail user={props.curUser} />
         <Select
            name="form-field-name"
            value="one"
            options={names}
            onChange={logChange}
          />
    </div>
  );
}

export default App;
