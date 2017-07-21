import React from 'react';
// import users from '../users';

export default function ListOfUsers(props){
    const userDivs = props.users.map((user) => {
      return <div>{user.first_name}</div>
    })
    return userDivs;

}