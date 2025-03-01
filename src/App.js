import { useState,useEffect } from "react";
import AddTodo from "./pages/AddTodo";
import Todos from "./pages/Todos";
import styled from "styled-components";
import {fetchTodos,insertTodo,deleteTodo} from "./controller/todoController";

const StyledDiv = styled.div`
  padding:0 0 0 30px;
`;

function App() {

  useEffect(() => {
    const getTodos = async () => {
      console.log('App.js is mounted');
      const todos = await fetchTodos();
      console.log('todos:', todos);
      setTotalTodos(todos);
    };
    
    getTodos();
  }, []);
  

  const [TotalTodos, setTotalTodos] = useState([]);

  const handleReceivedTodo = async (inputValue) => {
    if (inputValue !== '' && !TotalTodos.some(todo => todo.todo_name === inputValue)) {
      const result = await insertTodo(inputValue);
      const nextId = result.nextId;
      
      const newTodo = {
        todo_id: nextId, 
        todo_name: inputValue
      };
      setTotalTodos(prevTodos => [...prevTodos, newTodo]);
    }
  };
  

const ReceivedDeleteTodo = async (idValue) => {
  await deleteTodo(idValue);
  setTotalTodos(prevState => prevState.filter(item => item.todo_id !== idValue));
}

  return (
    <StyledDiv>
      <h2>Todo Application</h2>
      <AddTodo ReceiveTodo={handleReceivedTodo} />
      <Todos ReceivedDeleteTodo={ReceivedDeleteTodo} TotalTodos={TotalTodos} />
    </StyledDiv>
  );
}

export default App;
