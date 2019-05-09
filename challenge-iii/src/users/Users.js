import React from "react";
import axios from "axios";
import withAuth from "../auth/require-auth"



class Users extends React.Component{
    state={ 
        users:[]
    }

    componentDidMount(){
        const URL = "http://localhost:5000"

        axios
            .get(`${URL}/api/users`)
            .then(res=>{
                const data = res.data
                this.setState({users: data})
            })
            .catch(err=>{console.log("USER ERR::",err)})
    }
    render(){
        return(
            <div>
                <h3>List of users</h3>
                {this.state.users? (this.state.users.map(person=>(
                    <li key={person.id}>{person.username}</li>
                ))): <h2>there are no users</h2>}
            </div>
        )
    }
}
export default Users;