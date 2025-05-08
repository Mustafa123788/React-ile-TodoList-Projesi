import React, { useState , useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

import "../Css/Todo.css"


function Todo({todo,setTodos}) {
  const {id,name,color} = todo;
  const [update,setUpdate] = useState(false);
  const [inputValue,setInputValue] = useState("");

  const deleteTodo = ()=>{
    // prevTodos ile dizinin en güncel halini alıp dizi oluşturabiliriz [] döner {} dönmez
    setTodos((prevTodos)=> prevTodos.filter((el)=> el.id !== todo.id));
  }

  // input değerini newName olarak aldık, prevTodos ile en güncel
  // şekilde todoyu aldık map ile id ile eşleşip eşleşmediklerine göre,
  // true ise tüm değerleri getirip değeri parametre ile güncelledik değilse item eski değerini döndürdü

  const updateTodo = (newName) => {
    
    setTodos((prevTodos)=> prevTodos.map((item)=>
    item.id === id ? {...item,name : newName} : item));
    setUpdate(false);
  }

 



  

  return (
    <div className='todo-group'>
        <ul className='todo-item' key={id}>
        {update ? <input type="text" onChange = {(e)=>setInputValue(e.target.value)} value={inputValue}/> : <li className="todo-name">{name}</li>}
        <div className="icon-group">
          {update ? <FaSave onClick={()=>updateTodo(inputValue)}/> : <FaEdit onClick={()=>setUpdate(true)} className='icon'/>}
          <FaRegTrashAlt className='icon' onClick={deleteTodo}/>
        </div>
        </ul>
    </div>
  )
}

export default Todo