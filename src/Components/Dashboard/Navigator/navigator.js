
import React, { Fragment } from 'react'; 
import {NavLink} from 'react-router-dom';
import './navigator.css';
import search from '../../../Assets/images/outline_search_black_24dp.png';
import notif from '../../../Assets/images/outline_notifications_black_24dp.png';
import dog from '../../../Assets/images/pexels-anna-shvets-4587991.jpg';

import {
    Switch,
    Route,
    
} 

from "react-router-dom";
import{  useState } from "react";




function Navigator(){
return(
    <fragment className='nav'>
        <div className='left'>
            <img className= 'search_icon' src = {search} alt='#'></img>
            <input type='text' name='text' placeholder='Search a task' className='search_bar'></input>

        </div>
        <div className='right'>
        <img className= 'search_icon' src = {notif} alt='#'></img>
        <img className= 'image' src = {dog} alt='#'></img>
        </div>
    </fragment>
)
}

 export default Navigator;