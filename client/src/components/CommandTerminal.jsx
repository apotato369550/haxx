import React, { useState } from 'react';
import axios from 'axios';
// fix this import and test later
import Log from '../components/Log';

const CommandTerminal = ({ command, setCommand, logs, setLogs }) => {
    // make line component instead of log
    // fix this??
    // test this
    // test if this works...

    // log is empty
    // print out log
    // there is an error here loll
    // read the errors and solve them

    // all the information is in the data property stored as a string
    // fix this
    logs.map(log => {
        console.log("LOG IS BELOW ME:))")
        console.log(log);
    })
    return (
        <ul>
            {logs.map(log => (
                <Log id={log.id} type={log.type} text={log.text} log={log} />
            ))}
        </ul>
    )
}

export default CommandTerminal;