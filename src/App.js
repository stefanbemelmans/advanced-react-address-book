import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetail from './components/UserDetail';
import ListOfUsers from './components/ListOfUsers';

function App (props){
    return (
      <div>
        <ListOfUsers users={props.users} />
        <UserDetail user={props.users[0]} />
      </div>
    );
}

export default App;
