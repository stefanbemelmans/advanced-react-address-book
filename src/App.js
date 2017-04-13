import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetail from './components/UserDetail';
import ListOfUsers from './components/ListOfUsers';

function App (props){
  if(props.user){
    return (<div>
      <UserDetail user={props.user} />
    </div>)
  }else{
    return (
      <div>
        <ListOfUsers chooseUser={props.chooseUser} users={props.users} />
      </div>
    );
  }
}

export default App;
