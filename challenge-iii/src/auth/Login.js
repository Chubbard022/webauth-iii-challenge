import React from "react";
import axios from "axios";

class Login extends React.Component {
    state={
        username: "mr",
        password: "curtis"
    }

    handleChange = event =>{
        event.preventDefault();
        const {id,value} = event.target;
        this.setState({[id]:value})
    }

    handleSubmit = event =>{
        event.preventDefault();
        const URL = "http://localhost:5000";

        axios
            .post(`${URL}/api/auth/login`,this.state)
            .then(res=>{
                localStorage.setItem('jwt', res.data.token)
                this.props.history.push("/users")
            })
            .catch(err=>{console.log("LOGIN ERROR::",err)})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username" />
                    <input 
                        type="text"
                        id="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />

                    <label htmlFor="password" />
                    <input
                        type="password"
                        id="password"
                        onChange={this.handleSubmit}
                        value={this.state.password}
                    />
                <button type="submit"> Submut</button>
                </form>
            </div>
        )
    }
}

export default Login;