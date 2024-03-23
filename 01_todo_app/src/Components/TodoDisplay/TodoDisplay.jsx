import React, { useContext } from 'react'
import Card from './Card'
import { TodoContext } from '../../App';

function TodoDisplay() {

  const contextValues = useContext(TodoContext);
  const {
    value1: [value, setValue],
    value2: [todos, setTodos],
    addTask,
    deleteTask,
    markDone,
  } = contextValues;



  return (

    <div>
      <h2>Your recent Activities</h2>
      {
        todos.map((todo, key)=>{
            return <Card item={todo} key={key}/>
        })
      }
      
    </div>
  )
}

export default TodoDisplay