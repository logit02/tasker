import React from 'react'; 
import {NavLink} from 'react-router-dom';
import './signup.css'


import{  useState } from "react";



function Signup(){

   let [username, setUsername] = useState()
   let [pass, setPass] = useState()
   

   

    function handleInput(event) {
         setUsername(event.target.value)
         
        }

        function handlePass(event) {
            setPass(event.target.value)
            
           }
       
         
           const handleClick = async e => {
            e.preventDefault();
      
            try {
                  const body = {username, pass};
                  console.log(username)
                  const response = fetch("http://localhost:5000/users", {
                      method : "POST", 
                      headers : { "Content-Type" : "application/json"},
                      body : JSON.stringify(body, pass)
      
                  });
                  console.log(response);
            }catch (err) {
                console.error(err.message);
            }
            
            window.location = '/login';
        }


    
    
    function Redirect_login(){
        window.location = '/login';
    }

    function Redirect_signup(){
        window.location = '/signup';
    }

return(
    <div className='back'>
        <div className='login'>
            <p>Lithium Signup</p>
            
            <div className='filling_in'>
              
                <div className='buts'>
            <button className='upik' onClick = {Redirect_signup} >Signup</button>
            <button className='inik' onClick = {Redirect_login}>Login</button>
                </div>
              {/*}  <p className='err'>{err}</p> */}
            <input className='username' type='text' placeholder='Username' onChange ={handleInput}></input>
            <input className='username' type='password' placeholder='Password' onChange ={handlePass}></input>
            <input className='submit' name='submit' type='Submit' onClick = {handleClick}></input>
            
            <NavLink to="/home" className='forgot'>Having trouble logging in ?</NavLink>
            </div>
            
        </div>
        
    </div>
    
)
}


export default Signup;