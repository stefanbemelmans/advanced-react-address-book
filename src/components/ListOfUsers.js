import React, { Component } from 'react';

function ListOfUsers (props){
  var visible = true;
  var buttonText = "Hide";

  var userDivs = "";
  if(visible){
    buttonText = "Hide";
    userDivs = props.users.map(function(user){
      return <div>
          {user.first_name} - {user.last_name}
          <a> View </a>
      </div>
    });
  }else{
    buttonText = "Show";
    userDivs = "";
  }
  return (<div>
          <button onClick={()=>{
              visible = !visible;
              ListOfUsers();
            }
          }>
            {buttonText}
          </button>
          {userDivs}
        </div>)
}

export default ListOfUsers;
