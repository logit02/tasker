
import React from "react";
import {
  BrowserRouter,
    Switch,
    Route,
    Redirect,
    
} 
from "react-router-dom";
import Signup from './Components/Signup/signup.js'
import Dashboard from './Components/Dashboard/dashboard.js'
import Login from './Components/Login/login.js'

function App() {
  return (
      <div>
        <BrowserRouter>
        <Switch>
            <Route path="/signup">
                <Signup/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>

            <Redirect  from ='/' to ='/signup'></Redirect> 
                
        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
