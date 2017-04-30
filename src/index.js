import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import users from './users';
var currentUser  = null;
let filteredUsers = users;

function filterUsers(name){
  filteredUsers = users.filter(function(u){
    return u.first_name === name;
  });
  render();
}
function chooseUser(user){
  currentUser = user;
  render();
}

function render(){
  ReactDOM.render(
    <App 
    filterUsers={filterUsers}
    user={currentUser} 
    users={filteredUsers} 
    chooseUser={chooseUser}/>,
    document.getElementById('root')
  );
}
currentUser = users[0];
render();