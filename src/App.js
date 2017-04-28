import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetail from './components/UserDetail';
import ListOfUsers from './components/ListOfUsers';

function App (props){
    return (
      <div>
        <ListOfUsers 
        filterUsers={props.filterUsers}
        chooseUser={props.chooseUser} 
        users={props.users} />
        <UserDetail user={props.user} />
      </div>
    );
}

export default App;
