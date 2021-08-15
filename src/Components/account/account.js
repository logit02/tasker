import React from 'react'; 
import { NavLink } from 'react-router-dom'
import './account.css'
import dog from '../../Assets/images/pexels-anna-shvets-4587991.jpg';



function Account(){
    return(
        <div className='acc' >
            <div className='left_nav' id = 'gradient'>
                <div className='user_log'>
                    <img src ={dog} alt='#' className='user_image' />
                    <p className='hey'>Welcome back, Inesa</p>
                
                   
                </div>
                <NavLink className='elems' to ='/dashboard'>Home</NavLink>
                <NavLink className='elems' to ='/dashboard'>LogOut</NavLink>
                <NavLink className='elems' to ='/dashboard'>Delete account</NavLink>
            </div>
            <div className='panel'>
                 <p className='top_title'>Edit account</p>
                 <input type='text' name='text' placeholder='Username' className='user_input'></input>
                 <input type='submit' name='text' className='user_save'></input>
            </div>
        </div>
    )
}


export default Account;