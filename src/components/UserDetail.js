import React from 'react';

export default function UserDetail(props){
 
   return 
    <div>
      <h3>{props.user.first_name} {props.user.last_name}</h3>
      {/* <p>{person.address}</p>
      <p>{person.phone}</p>
      <p>{person.occupation}</p>
      <img src={person.avatar} /> */}
    </div>

} 