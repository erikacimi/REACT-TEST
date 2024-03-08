import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { TodoContext } from './context/TodoContext'; // Assicurati che il percorso sia corretto
import Todo from './Todo';

const App = () => {
  const { todos, setTodos } = useContext(TodoContext);
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
