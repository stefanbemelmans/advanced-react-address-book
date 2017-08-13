import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from './components/ListOfUsers';
import UserDetail from './components/UserDetail';
import Select from 'react-select';
// import SelectCont from './components/SelectCont';
import courses from "./courses"

let days = [
      {value:"M", label:"MON-WENS"}, 
      {value:"T",label:"TUES-THURS"},
      {value:"W", label:"WENS-FRI"},
      {value:"S",label:"SAT"}
    ];
function onChange(value) {
  
}

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
         <Select
          options={days}
          />
          {/* <Select
            name="DAYS"
            value={value}
            options={days}
            onChange={onChange}
            label="Days"
          />

         <Select
            name="form-field-name"
            value="one"
            options={courseList}
            onChange={onChange}
          /> */}
    </div>
  );
}

export default App;
