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

// render is not a function
// do more research
// figure out why render is not a function
// react-dom may be why

const routes = [
  {
    path: "/",
    component: Home,

  },
  {
    // work on this when full
    path: "/login",
    component: Login,
  },
  {
    path: "/console",
    component: Console
  }
]


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // get rid of the router, try putting only login component and see if it works.
  // try rendering the routes w/ the method in the tutorial

  return (
    /*
    <Router>
      <Switch>
        <Route 
          exact 
          path="/" 
          component={<Home />}/>
        <Route
          exact 
          path="/login" 
          render={
            (props) => <Login {...props} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
          }
        />
        <Route 
          exact 

          path="/console"
          render={
            (props) => <Console {...props} username={ username } password={ password } />
          }
        />
      </Switch>
    </Router>
    */

    // check if this works??
    // EYY THIS WORKS LEZ GOOO
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <Login setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>} />
        <Route exact path="/console" render={() => <Console username={username} password={password} />}/>
      </Switch>
    </Router>
   // this works
   // figure out why it aint working with the router...
   // search up that old tutorial. that might give us a lead

    // test this tomorrow
  );
}

export default App;
// work on it