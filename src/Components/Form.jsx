import React from 'react'
import "../Css/Form.css"

function Form({value,setValue,todos,setTodos}) {
    
    const colors = ["purple", "blue", "yellow"];

  const renkDondur = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const inputHandler = (e) => {
    e.preventDefault();
    //return etmeyi unutmalyalım
    if(!value.trim()){
      alert("Lütfen boş bir todo girmeyin.");
      return;
    }
    const newTodo = {
      id: Math.floor(Math.random() * 9999999),
      name: value,
      color: renkDondur(),
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };

  
    return (
            <div className="todo-container">
                <div className="todo-head">To Do List</div>
                <div className="todo-add-container">
                    <input type="text"
                    placeholder='Add new Todo'
                    className='todo-add'
                    value={value}
                    onChange={(e)=>setValue(e.target.value)} />
                    <button onClick={inputHandler}  className='add-btn'>Add</button>
                </div>
              
            </div>
    )
}

export default Form