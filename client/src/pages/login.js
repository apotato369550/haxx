import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = ({ setUsername, setPassword }) => {
    let history = useHistory();

    return (
        <div>
            <label for="username">Username: </label>
            <input id="username" type="text" placeholder="Enter your username here" onChange={
                (e) => {
                    setUsername(e.target.value);
                    // this can't do stuff??
                }
            } />
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
