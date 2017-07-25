import React from 'react';

export default function UserDetail(props){
 if(props.user){
    let person = props.user;
    console.log(person);
    let personKeys = Object.keys(person[0]).slice(1,6);
    console.log(personKeys);
    let pic = person[0].avatar;
   console.log(person);
   console.log(pic);

  let profile = personKeys.map(key => <div key={key}>{key}: {person[0][key]}</div>)
  
    return (
    <div className='profile'>
        <img src={pic} className='thumbnail' alt="log" />
        {profile}
    </div>);
}else{
    return null;
}

  
  

{//   return 
  
//   (  

//     <div> 
//         <img className='thumbnail' src={pic} alt='logo' />
//         <div className='profile'>{list}</div>)
//   </div>);
}
  }