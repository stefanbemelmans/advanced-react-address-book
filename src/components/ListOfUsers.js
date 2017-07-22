import React from 'react';
// import Button from './Button.js';
// import users from '../users';

export default function ListOfUsers(props){
    // const userDivs = props.users.map((user) => {
    //   return <div>{user.first_name}</div>
    // })
    
    let userAr = props.users.map((x,i) => <div key={i}>{x.first_name}</div>);
    let show = 'Show';
    function hideShow() {
        var x = document.getElementById('list');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
      }
   

    return  <div>
            <div> <button onClick="hideShow()">{show}</button></div>
        <div id='list'>
            {userAr};
        </div>
        </div>
    }

        
    
