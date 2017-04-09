import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import users from './users';
var user  = null;

function chooseUser(id){
  user = users.find((u)=> u.id === id);
  render();
}

function render(){
  ReactDOM.render(
    <App user={user} users={users} chooseUser={chooseUser}/>,
    document.getElementById('root')
  );
}
user = users[0];
render();