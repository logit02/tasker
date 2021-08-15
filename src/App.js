
import React from "react";
import {
  BrowserRouter,
    Switch,
    Route,
    Redirect,
    
    
} 
from "react-router-dom";
import{  useState } from "react";
import Signup from './Components/Signup/signup.js'
import Dashboard from './Components/Dashboard/dashboard.js'
import Login from './Components/Login/login.js'

import  {LoginContext} from './Components/Contexts/LoginContext'

function App() {
    const [isauth, setisAuth] = useState(false);
    
    
    
   
  return (
    
      <div>
       <BrowserRouter>

       
          < LoginContext.Provider value = {{isauth, setisAuth}}>
           {isauth ? <Dashboard /> : <Login />}
            </LoginContext.Provider>

        </BrowserRouter>
      </div>
  );
}

export default App;
