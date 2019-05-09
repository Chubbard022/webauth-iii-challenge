import React from 'react';
import axios from 'axios'
import { Route,NavLink, withRouter } from "react-router-dom"

import Login from "./auth/Login"
import Users from "./users/Users"
import './App.css';

const URL = "http://localhost:5000"

function App (props) {
    return (
      <div>
      Welcome to the React App
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
      </header>
      <main>
        <Route path="/login" component={Login}/>
        <Route path="/users" component={Users}/>
      </main>
      </div>
    )
}

export default withRouter(App);
