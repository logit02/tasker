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
    const {validuser} = useContext(LoginContext);
    const {isauth} = useContext(LoginContext);
    localStorage.setItem('state', isauth)
    console.log('dashboardi mej em', isauth)
    console.log('dashboardi mej em', validuser)
    //window.location= '/dashboard'
   
    return(
       <div>
       
        <Switch>
         
        <Route exact path={`/dashboard`}  render={props =>
            <div>
                <Navigator />
                <Task />
            </div>} />

6       <Route exact path={`/dashboard/acc`} component={Account} />
7      

       {isauth ? <Redirect to = '/dashboard'></Redirect>: <Redirect to = '/signin'></Redirect>}      
                
        
        </Switch>
        </div>

    )
}


export default Dashboard;