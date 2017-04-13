import React, { Component } from 'react';
import UserInfo from './UserInfo';
function UserDetail (props){
  //if we are on UserDetail route we see there is number in the URL
  //we need to get that number out of the URL to use for our code
  //.id exists because we defined it in the route /:id
  var id = props.match.params.id;
  var users = props.users;
  var user = users.find((u)=>u.id == id);
  if(!user)
    return null;
  else{
    return (
       <div>
        <UserInfo user={user} />
        <img src={user.avatar} />
      </div>
    );
  }
}

export default UserDetail;
