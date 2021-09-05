import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({isLogged,setIsLogged}) => {
    console.log("navbar "+isLogged)
    return (
        <div className="nav">
            <div className="logo">
                Django-React-JWT
            </div>
            {isLogged? 
                (<div className="pages">
                    <Link to='/home'>Home</Link>
                    <Link to='/logout'>Logout</Link>
                </div>):
                (<div className="pages">
                    <Link to='/'>Login</Link>
                    <Link to='/register'>Register</Link> 
                </div>)}
            
        </div>
    )
}

export default Navbar
