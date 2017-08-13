import React from "react";
import {Component} from "react";
import Select from 'react-select';
import courses from "../courses";

// var Select = require('react-select');
export default class SelectCont extends React.Component  {
  constructor(props){
    this.State ={
      displayName: "Days Of The Week",
      options: []
  }

this.componentDidMount(){
    let days = [
      {value:"M", label:"MON-WENS"}, 
      {value:"T",label:"TUES-THURS"},
      {value:"W", label:"WENS-FRI"},
      {value:"S",label:"SAT"}
    ];
    this.setState({
      options: days
    });
};    
    
  
  
 onChange(val) {
  console.log(value);
  this.setState({
     value:val
  }
}
  }
  render() {

    return (

      <Select 
      options={days}
      onChange={onChange}
      />
    );
  };
}

//import Select from "react-select";

//filter the options based on buttons, build the array to send to the select element. 