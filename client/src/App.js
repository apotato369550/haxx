import React, { useState, useEffect } from 'react';
import './css/neon-glow-theme.css';
import './App.css';
import Axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Console from "./pages/console";

// owrk on this

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/console" component={Console}/>
      </Switch>
    </Router>
  );
}

export default App;
// work on it