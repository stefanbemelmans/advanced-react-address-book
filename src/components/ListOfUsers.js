import React from 'react';
import Button from './Button.js';
// import users from '../users';

export default function ListOfUsers(props){
    // const userDivs = props.users.map((user) => {
    //   return <div>{user.first_name}</div>
    // })
    let showing = true;
    let userAr = props.users.map((x,i) => <div key={i}>{x.first_name}</div>);
    
    function handleClick() {
          showing = !showing;
      }
   

    return  
    <div>

        {/* <button onClick={handleClick}>
            {showing ? 'Hide' : 'Show'}
        </button> */}
        {userAr}
            {/* <div style='display ={showing};'>{userAr}</div> */}
    </div>
    }
