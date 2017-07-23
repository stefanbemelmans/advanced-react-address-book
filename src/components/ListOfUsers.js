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
	
    // var btn = document.getElementById('display');

    //     if (x.style.display === 'none') {
    //         btn.innerHTML = 'Hide'
    //         x.style.display = 'block';
    //         console.log(props);
    //        } else {
    //         x.style.display = 'none';
    //          btn.innerHTML = 'Show'; 

    //     }
    //   }
    // }
    render(){
        
        let userAr = this.props.users.map((x,i) => <div key={i}><a href={this.props.selectUser}{x.first_name}</div>);
			 let show = this.state.visible ? 'Hide' : 'Show';
				
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