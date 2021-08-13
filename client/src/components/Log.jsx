import React, { useState } from 'react';
import axios from 'axios';

const Log = ({ id, type, text, log }) => {
    console.log(log);
    return (
        // work on this??
        // render a li element
        // server/consoles response
        // print out every property in the log object
        <li id={id}>Type: {type} Text: {text} Log:</li>
    )
}

export default Log;