import React from 'react';

export default function UserDetail(props){
 
    let person = props.user;
    let personKeys = Object.keys(props.user).slice(1,6);
    let pic = props.user.avatar;
   console.log(person);
   console.log(pic);

  let profile = personKeys.map(key => <div key={key}>{key}: {person[key]}</div>)
  
    return (
    <div className='profile'>
        <img src={pic} className='thumbnail' alt="log" />
        {profile}
    </div>
);
  
  

{//   return 
  
//   (  

//     <div> 
//         <img className='thumbnail' src={pic} alt='logo' />
//         <div className='profile'>{list}</div>)
//   </div>);
}
  }