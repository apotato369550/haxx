import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import CommandPrompt from '../components/CommandPrompt';
import CommandTerminal from '../components/CommandTerminal';

// invalid parameters
// THIS WORKS:DDDD
// work on it
const Console = ({ username, password }) => {
    
    axios.post("http://localhost:3001/login", {
        username: username,
        password: password
    }).then((response) => {
        if(!response){
            console.log("Account does not exist");
            return <Redirect to="/login"/>
        }
    })
    
   // check if username and password accessible
   // fix the error here

    const [command, setCommand] = useState("");
    const [logs, setLogs] = useState([]);

    // add props to the components

    return (
        <div>
            <p>Username: {username} Password: {password}</p>
            <CommandTerminal command={command} setCommand={setCommand} logs={logs} setLogs={setLogs}/>
            <CommandPrompt command={command} setCommand={setCommand} logs={logs} setLogs={setLogs}/>
        </div>
    )
}

export default Console;
