import React from "react"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000/api"

axios.interceptors.request.use(
    function(requestConfig){
        requestConfig.headers.authorization = localStorage.getItem("jwt")
        return requestConfig
    },
    function(err){
        return Promise.reject(err)
    }
)
export default function(Component){
    return class Authentisated extends React.Component {
        render(){
            const token = localStorage.getItem("jwt")
            const notLoggedIn = <h3>please login to see the users</h3>

            return <>{token? <Component {...this.props} />: notLoggedIn}  </>
        }
    }
}