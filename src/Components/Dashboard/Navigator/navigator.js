
import React, { Fragment } from 'react'; 
import {NavLink} from 'react-router-dom';
import './navigator.css';
import search from '../../../Assets/images/outline_search_black_24dp.png';
import notif from '../../../Assets/images/outline_notifications_black_24dp.png';


import {
    Switch,
    Route,
    
} 

from "react-router-dom";
import{  useState } from "react";

function Navigator(){
return(
    <fragment className='al'>
        
        <div className='search_part'>
        <img src = {search} alt='search' className='search_icon'/>
        <input className='search'
                    
                    placeholder = "Search for an item"
                    type = "text" />
                    </div>
                    
        <div className='account'>
        <img src = {notif} alt='notif' className='notif_icon'/>
        <p className='hello'>Hello, Inesa !</p>

        </div>
    </fragment>
)
}

 export default Navigator;