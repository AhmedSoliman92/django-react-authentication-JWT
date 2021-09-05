import React from 'react'

const Register = () => {
    return (
        <div className="container">
            <form className="general-form">
                <input type="text" placeholder="Enter your username.." required/>
                <input type="email" placeholder="Enter your email.." required />
                <input type="password" placeholder="Enter your password.." required />  
                <input className="btn" type="submit" value="register"/> 
            </form>
        </div>
    )
}

export default Register
