import React, { useState } from 'react';
import './todo.css'

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>React Todo</h1>
      <div>
        <input className='input'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='button' onClick={addTodo}>Add Todo</button>
      </div>
      <h2>
        {todos.map((todo, index) => (
          <h3 key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </h3>
        ))}
      </h2>
    </div>
  );
};

export default TodoApp;
