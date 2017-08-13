import React from "react";
import {Component} from "react";
import Select from 'react-select';
import courses from "../courses";

let days = [
      {value:"M", label:"MON-WENS"}, 
      {value:"T",label:"TUES-THURS"},
      {value:"W", label:"WENS-FRI"},
      {value:"S",label:"SAT"}
    ];


export default function SelectCont(props){

  return(<div>
    <input type="checkbox" value="off" label="M-W">MonWed</input>
      <Select 
      options={days}
       />
    </div>
  )};


//import Select from "react-select";

//filter the options based on buttons, build the array to send to the select element. 