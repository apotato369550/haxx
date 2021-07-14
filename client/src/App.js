import React, { useState, useEffect } from 'react';
import './css/neon-glow-theme.css';
import './App.css';
import Axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Console from "./pages/console";

// owrk on this

// make console variable take stuff
// make username and password states here
// changestate and usestate and stuff
// damn boi

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={() => <Login username={ username } password={ password } setUsername={ setUsername } setPassword={ setPassword } />}/>
        <Route exact path="/console" component={() => <Console username={ username } password={ password } />}/>
      </Switch>
    </Router>
  );
}

export default App;
// work on it