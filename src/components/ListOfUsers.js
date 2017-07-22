import React from 'react';
// import Button from './Button.js';
// import users from '../users';

export default function ListOfUsers(props){
    // const userDivs = props.users.map((user) => {
    //   return <div>{user.first_name}</div>
    // })
    
    let userAr = props.users.map((x,i) => <div key={i}>{x.first_name}</div>);
    var btn = document.getElementById('hideShow');
    function hideShow() {
        var x = document.getElementById('list');
       
        if (x.style.display === 'none') {
            btn.innerHTML = 'Hide'
            x.style.display = 'block';
            
           } else {
            x.style.display = 'none';
             btn.innerHTML = 'Show'; 

        }
      }


    // function buttonFcn(){
    //     this.value === 'Show'
    // }
    return
            <div>
      
                <div> 
                    <button id='hideShow' onClick={hideShow}>Hide</button>
                
                    <div id='list'>
                        {userAr}
                    </div>
                </div>
            </div>
      
}