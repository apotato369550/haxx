import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = ({ username, password, setUsername, setPassword }) => {
    let history = useHistory();

    const usernameHandler = (event) => {
        console.log("Username Handler: " + event.target.value)
        setUsername(event.target.value);
        return;
    }

    // push this
    // bind the shit?

    const passwordHandler = (event) => {
        console.log("Password Handler: " + event.target.value)
        setPassword(event.target.value);
        return;
    }

    const redirectConsole = (event) => {
        history.push("/console");
        return;
    }

    return (
        <div>
            <label for="username">Username: </label>
            <input 
                id="username" 
                type="text" 
                placeholder="Enter your username here" 
                onChange={usernameHandler} 
                value={username} 
                required 
            />

            <label for="password">Password: </label>
            <input 
                id="password" 
                type="password" 
                placeholder="Enter your password here" 
                onChange={passwordHandler} 
                value={password} 
                required
            />
            <button className="btn btn-primary" onClick={redirectConsole}>Enter</button>
        </div>
    )
}

export default Login;
