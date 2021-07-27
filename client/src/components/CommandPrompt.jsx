import React, { useState } from 'react';
import axios from 'axios';

// test this out
const CommandPrompt = ({ command, setCommand, logs, setLogs }) => {
    const submitHandler = (event) => {
        // command is not working
        console.log("Submit handler has been clicked " + event.target.value)
        
        event.preventDefault();
        setCommand("");
        setLogs([...command]);
        axios.post("http://localhost:3001/command", {
            command: command
        }).then((response) => {
            console.log(response)
            setLogs([...response])
        }).catch((error) => {
            console.log(error);
        });
        return;
    }

    return (
        <div>
            <button type="button" onClick={submitHandler}>Enter</button>
            <input type="text" onChange={setCommand} />
        </div>
    )
}

export default CommandPrompt;