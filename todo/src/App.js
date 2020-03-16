import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import { initialState, todoReducer } from './Reducers/reducer'

import Todo from './Components/Todo'
import ToDoForm from './Components/TodoForm'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // const [newTodo, setNewTodo] = useState("");

  // const addTodo = {
  //   type: "ADD_TODO",
  //   payload: setNewTodo
  // }

  return (
    <div className="todobox">
    <div className="todoTop">
      <h1>To Do List</h1>
      <button>Destroy Finished</button>
    </div>
    <div className="todoBottom">
      <Todo dispatch={dispatch} state={state}/>
      <ToDoForm dispatch={dispatch}/>

    </div>
  </div>
  );
}

export default App;
