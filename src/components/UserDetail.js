import React from 'react';

export default function UserDetail(props){
  let person = props.users;
  return 
    <div>
      <h3>{props.users.first_name} {props.users.last_name}</h3>
      {/* <p>{person.address}</p>
      <p>{person.phone}</p>
      <p>{person.occupation}</p>
      <img src={person.avatar} /> */}
    </div>

} 