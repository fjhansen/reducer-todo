import React, {useState, useReducer} from "react";
import TodoForm from './TodoForm'
import { initialState, todoReducer } from '../Reducers/reducer'





const TodoList = (props) => {
  // Local State
  // const [newTodo, setNewTodo] = useState("");
  // App State

  // const [state, dispatch] = useReducer(todoReducer, initialState);


//   const addTodo = {
//   type: "ADD_TODO",
//   payload: setNewTodo
// }
//   const handleChanges = e => {
//     setNewTodo(e.target.value)
//   }

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(addTodo)
//     setNewTodo("")    
//   }
  
//   const changeTodo = e => {
//   dispatch(addTodo)
// }

console.log("STATE:", props.state)
// console.log("STATE ITEM 1", state[2].item)
console.log("TODO PROPS: ", props)
// console.log("NEWTODO: ", newTodo)


  return(

<>
      {props.state.map((state) => {
        return (
        <p key={state.id}>{state.item}</p>
        )
        
       
        
})}
      {/* <div>
    <h1>Input Todo</h1>
    <input
    className="todo-input"
    type="text"
    name="newTodo"
    value={newTodo}
    onChange={handleChanges}
    // placeholder={props.props[2].item}
  
    />
    <button onClick={handleSubmit}>Update List</button>
    

    </div> */}
</>
            

        


  )
}

export default TodoList