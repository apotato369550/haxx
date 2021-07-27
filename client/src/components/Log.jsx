import React, { useState } from 'react';
import axios from 'axios';

const Log = ({ input, logs }) => {
    const logId = logs.length + 1;
    return (
        // work on this??
        // render a li element
        // server/consoles response
        <li id={logId}>{input}</li>
    )
}

export default Log;