
import React from "react";
import {BrowserRouter} from "react-router-dom";
import{  useState, useEffect } from "react";
//import Signup from './Components/Signup/signup.js'
import Dashboard from './Components/Dashboard/dashboard.js'
import Login from './Components/Login/login.js'

import  {LoginContext} from './Components/Contexts/LoginContext'

function App() {
  console.log('Appi mej enq')
    const [isauth, setisAuth] = useState(false);
    console.log(isauth)
    useEffect(() => {
        
      const loggedInUser = localStorage.getItem("state");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        setisAuth(foundUser);
      }
    }, []);
    
   
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
