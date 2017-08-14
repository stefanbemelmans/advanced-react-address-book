import React from "react";
import {Component} from "react";
import Select from 'react-select';
import courses from "../courses";

export default class SelectCont extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      options: courses.map((x) => {
        return {value:x.course,label:x.course};

      }),
      displayName: 'Courses',
      selectValue: "",
      day: "",
      course: "",
      disabled: false,
      searchable: this.props.searchable,
      clearable: true
    }
      this.updateValue = this.updateValue.bind(this)
    
    
    let days = [
      {value:"M", label:"MON-WENS"}, 
      {value:"T",label:"TUES-THURS"},
      {value:"W", label:"WENS-FRI"},
      {value:"S",label:"SAT"}
    ];
  }
 
    
    // componentDidMount() {
     
      

      
      // return {
      //   country: 'AU',
      //   disabled: false,
      //   searchable: this.props.searchable,
      //   selectValue: 'new-south-wales',
      //   clearable: true,
      // };
    
    switchDays (e) {
      var newDay = e.target.value;
      console.log('Day changed to ' + newDay);
      this.setState({
       day: newDay,
      selectValue: null
      });
    }
    
      //  let courseName = courses.map((x) => {
      //   return{
      //     label:x.course,
      //     value: x.course
      //   }
      // }
    updateValue (newValue) {
      console.log('State changed to ' + newValue);
      
      this.setState({
        selectValue:  newValue 
      })
        //selectValue: newValue
      };
    
    //
    focusStateSelect () {
      this.refs.stateSelect.focus();
    };
    toggleCheckbox (e) {
      let newState = {};
      newState[e.target.name] = e.target.checked;
      this.setState(newState);
    }
  
//   filterOptions(day) {
//      return this.state.options.filter((x) => { 
//      if(x.days.includes(day)){
//        return x.days;
//      }
//     })
// }


	render () {
		var options = this.state.options;
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select ref="stateSelect" autofocus options={options} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />

				<div style={{ marginTop: 14 }}>
					<button type="button" onClick={this.focusStateSelect}>Focus Select</button>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="searchable" checked={this.state.searchable} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Searchable</span>
					</label>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Disabled</span>
					</label>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="clearable" checked={this.state.clearable} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Clearable</span>
					</label>
				</div>
				<div className="checkbox-list">
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.day === 'day'} value="M" onChange={this.switchCountry}/>
						<span className="checkbox-label">Monday and Wednesday</span>
					</label>
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.day === 'day'} value="T" onChange={this.switchCountry}/>
						<span className="checkbox-label">Tuesday and Thursday</span>
					</label>
          	<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.day === 'S'} value="S" onChange={this.switchCountry}/>
						<span className="checkbox-label">Saturday</span>
					</label>
				</div>
			</div>
		);
	}
}

