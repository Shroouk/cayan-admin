import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'
const Login  = (props)=> { 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const loginChangeHandler = (e)=>{
        props.onLoginChangeHandler(true)
      }

    const usernameChangeHandler = (e)=>{
        setUsername(e.target.value)
    }
    const passwordChangeHandler = (e)=>{
        setPassword(e.target.value)
    }

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/dashboard');
            loginChangeHandler();
        }
    })

    async function loginHandler(e){
        e.preventDefault();
       // console.log(username, password);
       // console.log(localStorage)
        let item = {username, password};
        let result = await fetch("https://backend.mo3ts.com/login",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
           body: JSON.stringify(item)

        });
        result = await result.json();
        console.log(result)

        if(result.cayanToken){
            console.log(result.cayanToken)
            localStorage.setItem("user-info",JSON.stringify(result));
            localStorage.setItem("cayanToken","Bearer "+result.cayanToken);
            
            console.log("Bearer "+result.cayanToken)
            navigate('/dashboard');
            

        }else{
            alert('wrong username or password ')
        }
    
    }

    return(
        <>
        <div className="login-wrapper">
        <div className="login">
        <div className="form">
            <form className="login-form">
            <span className="material-icons"><i className="fa fa-lock"></i></span>
            <div className='row'>
                <h2 className='login-heading'>Admin Login</h2>
            </div>
            <input type="text" placeholder="username" required value={username} onChange={usernameChangeHandler}/>
            <input type="password" placeholder="password" required value={password} onChange={passwordChangeHandler} />
            <button onClick={loginHandler}>login</button>
            </form>  
        </div>
        </div>
        </div>
        </>
    )

}



export default Login;
 