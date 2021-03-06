import React from 'react'; 
import './navigator.css';
import search from '../../../Assets/images/outline_search_black_24dp.png';
import notif from '../../../Assets/images/outline_notifications_black_24dp.png';
import dog from '../../../Assets/images/pexels-anna-shvets-4587991.jpg';
import {LoginContext} from '../../Contexts/LoginContext'
import{useContext} from "react";

function Navigator(){
    const {isauth, setisAuth} = useContext(LoginContext);
    const {validuser} = useContext(LoginContext);
    
    function log(){
        window.location= '/signin'
        setisAuth(false)
        localStorage.removeItem('state')
       

    }

    function Move_acc(){
        window.location = '/dashboard/acc'
    }

   

return(
    <div className='nav'>
        <div className='left'>
            <img className= 'search_icon' src = {search} alt='#'></img>
            <input type='text' name='text' placeholder='Search people, friends or a task' className='search_bar'></input>
            <button className='add' >Search</button> 

        </div>
        <div className='right'>
            <p className='valid-user'>Hi , {validuser}</p>
        <img className= 'search_icon' src = {notif} alt='#'></img>
        <img className= 'image' src = {dog} onClick={Move_acc}  alt='#'></img>
        
        <button className='log_out' onClick={log}>Log out</button>
        </div>
    </div>
)
}

 export default Navigator;