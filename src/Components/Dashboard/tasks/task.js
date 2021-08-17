import React from 'react'; 
import './task.css'
import trash from '../../../Assets/images/outline_delete_black_24dp.png'
import{useState} from "react";

function ToDo({ todo, toggleTask, removeTask }) {
    const [status, setStatus] = useState(false);
    const [value, setValue] = useState('Pending')
    function maketrue(){
        setStatus(!status);
            if(value==='Pending'){
                setValue("Complete")
            }else{
                setValue('Pending')
            }
    }
    return (
        
        <div key={todo.id} className= "tit">
            <div className='text-box'
               
                onClick={() => toggleTask(todo.id)}
                >
                {todo.ask}
                
            </div>
            <div className="item-delete" >
            <button className={status ? "status-true" : "status-false"} onClick = {maketrue}>{value}</button>
                <img className = 'trash'  onClick={() => removeTask(todo.id)}src = {trash} alt='#'></img>
    </div>
        </div>
       
    )
}



function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <form className ='adding' onSubmit={handleSubmit}>
            <input 
                className='add_input'
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="What's your spirit for today?"
            />        
            <button className='add'>Add new</button>
        </form>
    )
}


function Task(){
    let num =7;
   
    const [todos, setTodos] = useState([])
    console.log(todos)

    const addTask = (userInput) => {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                ask: userInput,
                complete: false
                        }
        setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }
      
      
    return(
        <div className='wrap'>
            <div className='create'>
                <h1 className='num_tasks'>You've got <span style={{color: '#F3477A'}}> {todos.length + ' tasks' } </span> today</h1>
                
                
            </div>
            
            <ToDoForm addTask={addTask} />
            <div className='box'>
                {todos.map((todo) => {
                    return (
                        
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            toggleTask={handleToggle}
                            removeTask={removeTask}
                        />
                       
                         )
                 })}
                 </div>
        </div>
    )
}

export default Task;