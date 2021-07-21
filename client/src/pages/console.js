import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import CommandPrompt from './components/CommandPrompt';
import CommandTerminal from './components/CommandTerminal';

const Console = (username, password) => {
    axios.post("http://localhost:3001/login", {
        username: username,
        password: password
    }).then((response) => {
        if(!response){
            console.log("Account does not exist");
            return <Redirect to="/login"/>
        }
    })

    const [command, setCommand] = useState("");
    const [logs, setLogs] = useState([]);

    // add props to the components

    return (
        <div>
            <CommandTerminal />
            <CommandPrompt />
        </div>
    )
}

export default Console;
