import React from 'react';
import axios from 'axios'
import { Route,NavLink, withRouter } from "react-router-dom"

//import Login from " "
//import Users from " "
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
      </div>
    )
  }
}

export default App;
