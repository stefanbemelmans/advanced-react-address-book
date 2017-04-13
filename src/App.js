import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetail from './components/UserDetail';
import ListOfUsers from './components/ListOfUsers';
//browser router represents the underlying technology used for routing
//there are other ways to do it that is why it has a specific name
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App (props){
  return (
    <BrowserRouter>
      <div>
        {/*switch is a programming term that means choose of of these choices
        this means that only one route will ever be used
        */}
        <Switch>
          {/*path means, whenever you see this url in the address bar, show this component*/}
          <Route exact path="/" render={(p) => <ListOfUsers users={props.users} {...p} />} />
          <Route exact path="/user/:id" render={(p) => <UserDetail users={props.users} {...p} />} />
          {/*this is a default route because it has no path
          it will match anything other than the routes already defined above it
          */}
          <Route render={() => <h2>This route has not be accounted for!</h2>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
