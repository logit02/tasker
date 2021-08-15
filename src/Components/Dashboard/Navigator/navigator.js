import React from 'react'; 
import './navigator.css';
import search from '../../../Assets/images/outline_search_black_24dp.png';
import notif from '../../../Assets/images/outline_notifications_black_24dp.png';
import dog from '../../../Assets/images/pexels-anna-shvets-4587991.jpg';
import {
    
    Link,
    
} 

from "react-router-dom";
import Account from '../../account/account'

function Navigator(){


    function imageClick(){
       console.log(123)
    }
return(
    <div className='nav'>
        <div className='left'>
            <img className= 'search_icon' src = {search} alt='#'></img>
            <input type='text' name='text' placeholder='Search a task' className='search_bar'></input>

        </div>
        <div className='right'>
        <img className= 'search_icon' src = {notif} alt='#'></img>
        <img className= 'image' src = {dog}  onClick={() => imageClick()} alt='#'></img>
        <button className='log_out'>Log out</button>
        </div>
    </div>
)
}

 export default Navigator;