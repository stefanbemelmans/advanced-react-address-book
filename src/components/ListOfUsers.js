import React from 'react';
// import Button from './Button.js';
// import users from '../users';

export default class ListOfUsers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
		    visible: true,
			searchText: ''
        }
    
		this.onClick = this.onClick.bind(this); 
        this.handleChange = this.handleChange.bind(this);
        this.userClick = this.userClick.bind(this);
   }
    onClick()  {
			if(document.getElementById('list').style.display === (""||'none')){
				document.getElementById('list').style.display = 'block';
			}else{
				document.getElementById('list').style.display = 'none';
			}
        this.setState({
            visible: this.state.visible ? false : true
				})
			
			}
		
	handleChange(e) {
			this.setState({
				searchText: e.target.value
			})
        }
    
    userClick(e) {
       console.log(e.target);
        let user = this.props.users.filter(function(x){ 
            return x.first_name === e.target.innerHTML;
        })
        console.log(user[0]);
        this.props.getUser(user);
    }
    render(){
         
      
			 let show = this.state.visible ? 'Hide' : 'Show';
		var filterUsers = this.props.users.filter((u)=>{
                // if(this.state.searchText == ""){
                //     return true;
                // }
                return u.first_name.indexOf(this.state.searchText) > -1 ? true : (this.state.searchText == "" ? true : false);
            })
            let userAr = filterUsers.map((x,i) => <div key={i}><a href='#' onClick={(e) =>{this.userClick(e)}}>{x.first_name}</a></div>);		
             return(
                <div>
                    <input type='text' label='search' defaultValue='Search' onChange={(e)=>{this.handleChange(e)}}></input>
                    <br />
                    <button id='display' onClick={this.onClick}>{show}</button> 
                    <div id='list'>{userAr}</div>
                </div>
			);


    }
}