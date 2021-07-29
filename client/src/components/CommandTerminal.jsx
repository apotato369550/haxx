import React, { useState } from 'react';
import axios from 'axios';
// fix this import and test later
import Log from '../components/Log';

const CommandTerminal = ({ command, setCommand, logs, setLogs }) => {
    // make line component instead of log
    // fix this??
    // test this
    return (
        <ul>
            {logs.map(log => (
                <Log input={log} logs={logs} />
            ))}
        </ul>
    )
}

export default CommandTerminal;