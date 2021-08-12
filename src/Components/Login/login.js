import React, { Fragment } from 'react'; 
import {NavLink} from 'react-router-dom';
import './login.css'

import {
    Switch,
    Route,
    
} 

from "react-router-dom";
import{  useState } from "react";



function Login(){

   let [username, setUsername] = useState(false)
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
            const res = fetch("http://localhost:5000/login", {
                method : "POST", 
                headers : { "Content-Type" : "application/json"},
                body : JSON.stringify(body, pass)

            }).then((res)=> res.json())
            .then((response)=>{     
               console.log(response)

               if(response.message === true){
                window.location = '/dashboard';
                localStorage.setItem('user','true' )
               }
            })


           
            
      }catch (err) {
          console.error(err.message);
      }
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
            <p>Lithium Login</p>
            <div className='filling_in'>
                <div className='buts'>
            <button className='up' onClick = {Redirect_signup}>Signup</button>
            <button className='in' onClick = {Redirect_login}>Login</button>
                </div>
            <input className='username' type='text' placeholder='Username' onChange ={handleInput}></input>
            <input className='username' type='password' placeholder='Password' onChange ={handlePass}></input>
            <input className='submit' name='sinmt' type='Submit' onClick = {handleClick}></input>
            
            <NavLink to="/home" className='forgot'>Having trouble logging in ?</NavLink>
            </div>
            
        </div>
        
    </div>
    
)
}


export default Login;