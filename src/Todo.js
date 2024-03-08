import React, { useContext } from 'react';
import { TodoContext } from './context/TodoContext';

const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.title}
      <button onClick={() => handleComplete(todo.id)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default Todo;
