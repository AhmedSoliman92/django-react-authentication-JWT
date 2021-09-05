import React from 'react'
import  {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
const Login = ({isLogged,setIsLogged}) => {
    const [loginParams,setLoginParams]= useState({username:'',password:''});
    const headers = {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'};
    let history = useHistory()
    const handleSubmit = async(e)=> {
        
        e.preventDefault()
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,loginParams,headers);
        setIsLogged(true)
        if(res.data.tokens){
            setLoginParams({username:'',password:''})
            localStorage.setItem('access',res.data.tokens['access'])
            localStorage.setItem('refresh',res.data.tokens['refresh'])
            console.log(isLogged)
            history.push('/home')
        }
    }
    return (
        <div className="container" onSubmit={(e)=>handleSubmit(e)}>
            <form className="general-form">
                <input type="text" placeholder="Enter your username.." onChange={(e)=>setLoginParams({username:e.target.value,password:loginParams.password})} required/>
                <input type="password" placeholder="Enter your password.." onChange={(e)=>setLoginParams({username:loginParams.username,password:e.target.value})} required />  
                <input className="btn" type="submit" value="login"/> 
            </form>
        </div>
    )
}

export default Login