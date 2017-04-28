import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import users from './users';
var user  = null;
let filteredUsers = users;

function filterUsers(name){
  filteredUsers = users.filter(function(u){
    return u.first_name === name;
  });
  render();
}
function chooseUser(id){
  user = users.find((u)=> u.id === id);
  render();
}

function render(){
  ReactDOM.render(
    <App 
    filterUsers={filterUsers}
    user={user} 
    users={filteredUsers} 
    chooseUser={chooseUser}/>,
    document.getElementById('root')
  );
}
user = users[0];
render();