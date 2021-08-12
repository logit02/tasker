
import React, { Fragment } from 'react'; 
import {NavLink} from 'react-router-dom';
import {
    Switch,
    Route,
    
} 

from "react-router-dom";
import{  useState, useRef } from "react";
import './task.css'
import trash from '../../../Assets/images/outline_delete_black_24dp.png'


function Element(){
    return(
        <li>
                    <p className = 'tit'> Evaluate task management tool </p> 
                    <button className='status'>Pending</button>
                    <img className = 'trash' src = {trash} alt='#'></img>
                    
        </li>
    )
    
}

function Onhold() { 
    var elementRef = useRef();
    return(
        <fragment className='wraping'>
            <p className='task_title'> In progress</p>
            <ul ref={elementRef}>
                
                <Element />
                
            </ul>
        </fragment>
    )
    }
{/*function Append_child (){  
    elementRef.current.append.child(<Element />)
}*/}

function Task(){
    let num =7;

    
        
    return(
        <fragment className='wrap'>
            <div className='create'>
                <h1 className='num_tasks'>You've got <span style={{color: '#F3477A'}}> {num + ' task' } </span> today</h1>
                <button className='add' >Add new</button>
            </div>
            <Onhold />
           
        </fragment>
    )
}

export default Task;