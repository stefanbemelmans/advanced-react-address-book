import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from './components/ListOfUsers';
import UserDetail from './components/UserDetail';
import Select from 'react-select';
import SelectCont from './components/SelectCont';
import courses from "./courses"

<<<<<<< HEAD

function App(props) {
=======
let days = [
      {value:"M", label:"MON-WENS"}, 
      {value:"T",label:"TUES-THURS"},
      {value:"W", label:"WENS-FRI"},
      {value:"S",label:"SAT"}
    ];
>>>>>>> 05556120e7ebd366568f7292041d48bdae49cbd6

function App(props) {
  
  // let names = props.users.map((x) => {
  //   return {
  //     value:x.first_name, 
  //     label:x.first_name
  //   }
  //   });
  
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
         <SelectCont />
    </div>
  );
}

export default App;
