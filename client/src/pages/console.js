import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const Console = (username, password) => {
    axios.post("http://localhost:3001/register", {
        username: username,
        password: password
    }).then((response) => {
        if(!response){
            console.log("Account does not exist");
            return <Redirect to="/login"/>
        }
    })

    return (
        <div>
            Welcome to console page
        </div>
    )
}

export default Console;
