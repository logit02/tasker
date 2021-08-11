
import React, { Fragment } from 'react'; 
import {NavLink} from 'react-router-dom';
import './dashboard.css'
import Navigator from './Navigator/navigator.js'

import {
    Switch,
    Route,
    
} 

from "react-router-dom";
import{  useState } from "react";

function Dashboard() {
    return(
        <Switch>
        <Route path="/dashboard">
         <Navigator />
     
            
        </Route>

        
        </Switch>

    )
}


export default Dashboard;