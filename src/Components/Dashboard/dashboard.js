
import React from 'react'; 

import './dashboard.css'
import Navigator from './Navigator/navigator.js'
import Task from '../Dashboard/tasks/task.js'
import Account from '../account/account.js'
import {
    Switch,
    Route,
    Redirect,
    
} 

from "react-router-dom";
import {LoginContext} from '../Contexts/LoginContext'
import{useContext} from "react";


function Dashboard(){
    
   
    const {isauth} = useContext(LoginContext);
    console.log('dashboardi mej em', isauth)
  
    return(
       <div>
           
        <Switch>
            <Route exact path="/dashboard">
                <Navigator />
                <Task />
            
            </Route>
            

            <Route exact path="/dashboard/acc">
                <Account />
            
            </Route>

        <Redirect from = '/' to = '/dashboard'/>

       

        
        </Switch>
        </div>

    )
}


export default Dashboard;