import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ListOfUsers extends Component {
  constructor(){
    super();
    this.state =  {visible:true};
  }
  render(){

    var buttonText = "Hide";
    var userDivs = "";
    var chooseUser = this.props.chooseUser;
    if(this.state.visible){
      buttonText = "Hide";
      userDivs = this.props.users.map(function(user){
        return (<div>
                {user.first_name} - {user.last_name}
                <Link to={"/user/" + user.id}> View </Link>
               </div>
               )
      });
    }else{
      buttonText = "Show";
      userDivs = "";
    }
    return (<div>
            <button onClick={()=>{
                this.setState({
                  visible:!this.state.visible
                });
              }
            }>
              {buttonText}
            </button>
            {userDivs}
          </div>)
  }
}

export default ListOfUsers;
