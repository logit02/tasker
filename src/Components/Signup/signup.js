import React from 'react'; 
import {NavLink} from 'react-router-dom';
import './signup.css'


import{  useState, useContext } from "react";
import {LoginContext} from '../Contexts/LoginContext'



function Signup(){

   let [username, setUsername] = useState()
   let [pass, setPass] = useState()
   const{loginPart, setLoginPart} = useContext(LoginContext);
   const [name, setName] = useState('')
   

   function handleName(event) {
    setName(event.target.value)
    
   }


    function handleInput(event) {
         setUsername(event.target.value)
         
        }

        function handlePass(event) {
            setPass(event.target.value)
            
           }
       
         
           const handleClick = async e => {
            e.preventDefault();
      
            try {
                
                
                  const body = {username, pass , name};
                  console.log(username)
                  const response = fetch("http://localhost:5000/user", {
                      method : "POST", 
                      headers : { "Content-Type" : "application/json"},
                      body : JSON.stringify(body, pass)
      
                  });
                  console.log(response);
            }catch (err) {
                console.error(err.message);
            }
            
           
        }


    
    
    function Redirect_login(){
        setLoginPart(true);
    }

    function Redirect_signup(){
        setLoginPart(false);
    }

return(
    <div className = 'filling_in'>
            <input className='username' type='text' placeholder='Name, Surname' onChange ={handleName}></input>
     <input className='username' type='text' placeholder='Username' onChange ={handleInput}></input>
            <input className='username' type='password' placeholder='Password' onChange ={handlePass}></input>
            <button className='submit' onClick = {handleClick}>Join now!</button>
            
           
    </div>
    
)
}


export default Signup;

