import React from 'react';
import axios from 'axios'
import { Route,NavLink, withRouter } from "react-router-dom"

import Login from "./auth/Login"
import Users from "./users/Users"
import './App.css';


function App (props) {

  function logout(){
    localStorage.removeItem("jwt")
    props.history.push("/login")
  }
    return (
      <div>
      Welcome to the React App
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
      </header>
      <button type="button" onClick={logout}>Log-Out</button>
      <main>
        <Route path="/login" component={Login}/>
        <Route path="/users" component={Users}/>
      </main>
      </div>
    )
}

export default withRouter(App);
