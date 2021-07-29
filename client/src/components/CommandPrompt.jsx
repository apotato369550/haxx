import React, { useState } from 'react';
import axios from 'axios';

// test this out
const CommandPrompt = ({ command, setCommand, logs, setLogs }) => {
    // oh shit there are two handlers

    const commandHandler = (event) => { 
        console.log("command handler has been evoked");
        setCommand(event.target.value)
        return;
    }

    const submitHandler = (event) => {
        // command is not working
        console.log("Submit handler has been clicked " + event.target.value)
        
        // command is not iterable?
        // it's because it's empty first
        // work on this
        event.preventDefault();
        // ^^ test this
        // command is not iterableVVV
        // this works... kinda
        // it does it w/ individual letters
        // there is no response from the server... i should re-do this portion??
        
        setLogs([...logs, command]);
        // print it out as a string^^^
        /*
        axios.post("http://localhost:3001/command", {
            command: command
        }).then((response) => {
            console.log(response)
            setLogs([...response])
        }).catch((error) => {
            console.log(error);
        });
        */

        setCommand("");
        return;
    }

    return (
        <div>
            <button type="button" onClick={submitHandler}>Enter</button>
            <input type="text" onChange={commandHandler} value={command}/>
        </div>
    )
}

export default CommandPrompt;