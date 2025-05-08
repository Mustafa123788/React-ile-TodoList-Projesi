import React, { useEffect, useState } from 'react';
import "./App.css";
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const [value, setValue] = useState("");
  //! useState fonksiyon olarak çalıştırılabilir
  //! veri saklarken kullanılır.
  const [todos, setTodos] = useState(()=>{
    try {
      const local = localStorage.getItem("todos");
      return local ? JSON.parse(local) : [];
    } catch (error) {
      console.error("LocalStorage JSON parse hatası:",error);
      return [];
    }
  });


  // Todos güncellendikçe localStorage'a yaz
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='App'>
      <Form
        value={value}
        setValue={setValue}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList setTodos={setTodos}
      todos={todos} />
    </div>
  );
}

export default App;
