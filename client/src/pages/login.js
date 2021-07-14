import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = ({ username, password, setUsername, setPassword }) => {
    let history = useHistory();

    const usernameHandler = (event) => {
        setUsername(event.target.value);
        return;
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        return;
    }

    return (
        <div>
            <label for="username">Username: </label>
            <input id="username" type="text" placeholder="Enter your username here" onChange={ usernameHandler } />
            <label for="password">Password: </label>
            <input id="password" type="password" placeholder="Enter your password here" onChange={ 
                (e) => {
                    setPassword(e.target.value);
                }
            } required />
            <button className="btn btn-primary" onClick={
                () => {
                    history.push("/console");
                }
            }>Enter</button>
        </div>
    )
}

export default Login;
