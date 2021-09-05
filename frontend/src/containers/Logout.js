import React from 'react'
import { useHistory } from 'react-router'
import { Switch,Route,Link } from 'react-router-dom'
import { Login } from '.'
const Logout = ({isLogged,setIsLogged}) => {
    let history=useHistory()
    console.log("log out "+isLogged)
    localStorage.clear()
    setIsLogged(false)
    return (
        <div>You logged out.
        <Link to='/'>login</Link>
        </div>

    );
}

export default Logout
