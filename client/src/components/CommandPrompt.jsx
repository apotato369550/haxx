import React, { useState } from 'react';
import axios from 'axios';

// test this out
const CommandPrompt = ({ command, setCommand, logs, setLogs, username, password, id }) => {
    // oh shit there are two handlers

    const commandHandler = (event) => { 
        console.log("command handler has been evoked");
        setCommand(event.target.value)
        return;
    }

    const submitHandler = (event) => {
        // command is not working
        console.log("Submit handler has been clicked " + event.target.value)
        
        event.preventDefault();
        
        // test this all later
        // work on this

        axios.post("http://localhost:3001/command", {
            command: command,
            username: username,
            password: password,
            id: id
        }).then((res) => {
            // fix this setlogs
            // logs is an array, not a singular object
            // find out how to combine both arrays here

            // THIS FUCKIGN WORKS FUCK YEAH
            for(let i = 0; i < res.data.length; i++){
                let response = res.data[i];
                console.log("Response TEXT BELOW ME");
                console.log(response.text);
            }
            // is res not an array??
            // setLogs([...logs, command, res]);
        }).catch((error) => {
            // this gets hit w/ an error
            // figureo ut why there is an error for getting a response
            console.log("Error below me: ")
            console.log(error);
            setLogs([
                ...logs, 
                command, 
                {id: Math.random, type: "error", text: "An error has occurred"}]);
        });


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