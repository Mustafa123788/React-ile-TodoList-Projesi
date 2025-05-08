import React from 'react'
import Todo from './Todo'
import "../Css/TodoList.css"

function TodoList({todos,setTodos}) {
  return (
    <div className='todo-list'>
        <h2 className='list-head'>Task List</h2>
          {todos && todos.map((todo)=>(
            <Todo key={todo.id} todo={todo} setTodos = {setTodos} />
          ))}
    </div>
  )
}

export default TodoList