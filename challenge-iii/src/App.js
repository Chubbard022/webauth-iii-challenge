import React from 'react';
import axios from 'axios'
import { Route,NavLink, withRouter } from "react-router-dom"

import Login from "./auth/Login"
import Users from "./users/Users"
import './App.css';

const URL = "http://localhost:5000"

class App extends React.Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }

  componentDidMount(){
    axios
      .get(`URL`)
  }


  render(){
    return (
      <div className="App">
      Welcome to the React App
      <Login />
      <Users />
      </div>
    )
  }
}

export default App;
