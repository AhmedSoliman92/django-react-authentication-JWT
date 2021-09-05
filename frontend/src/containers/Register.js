import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const Register = () => {
    const [registerParams,setRegisterParams]= useState({username:'', email:'',password:''});
    const headers = {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'};
    let history = useHistory()
    const handleSubmit = async(e)=> {
        
        e.preventDefault()
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`,registerParams,headers);
        try{
            console.log(res.data)
            setRegisterParams({username:'', email:'',password:''})
            history.push('/')
        }
        catch(err){
            console.error(err)
        }
            
        }
    return (
        <div className="container">
            <form className="general-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your username.." onChange={(e)=>setRegisterParams({username:e.target.value,email: registerParams.email, password:registerParams.password})} required/>
                <input type="email" placeholder="Enter your email.." onChange={(e)=>setRegisterParams({username:registerParams.username,email: e.target.value, password:registerParams.password})} required />
                <input type="password" placeholder="Enter your password.." onChange={(e)=>setRegisterParams({username:registerParams.username,email: registerParams.email, password: e.target.value})} required />  
                <input className="btn" type="submit" value="register"/> 
            </form>
        </div>
    )
}

export default Register
