import React, { useState } from 'react';
import axios from 'axios';

const CommandPrompt = (command, setCommand, logs, setLogs) => {
    const submitHandler = (event) => {
        event.preventDefault();
        setCommand("");
        setLogs([...command]);
        axios.post("http://localhost:3001/command", {
            command: command
        }).then((response) => {
            setLogs([...response])
        }).catch((error) => {
            
        });
    }

    return (
        <div>
            <button type="button" onClick={submitHandler}></button>
            <input type="text" value={command} onChange={setCommand} />
        </div>
    )
}

export default CommandPrompt;