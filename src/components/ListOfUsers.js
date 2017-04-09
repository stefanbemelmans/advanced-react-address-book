import React, { Component } from 'react';

function ListOfUsers (props){
   var userDivs = props.users.map(function(user){
      return <div>
          {user.first_name} - {user.last_name}
          <a> View </a>
      </div>
    });
    return (<div>
             {userDivs}
           </div>)
}

export default ListOfUsers;
