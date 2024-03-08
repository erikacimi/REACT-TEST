const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
  
    return (
      <TodoContext.Provider value={{ todos, setTodos }}>
        {children}
      </TodoContext.Provider>
    );
  };
  