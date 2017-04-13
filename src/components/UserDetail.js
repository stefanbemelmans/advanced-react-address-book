import React, { Component } from 'react';
import UserInfo from './UserInfo';
function UserDetail (props){
  var user = props.user;
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
