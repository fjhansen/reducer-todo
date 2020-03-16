import React, {useState} from 'react'

const ToDoForm = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = e => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(addTodo)
    setNewTodo("")    
  }

  
  const addTodo = {
    type: "ADD_TODO",
    item: newTodo,
    id: new Date()
    // payload: setNewTodo
  }

  // console.log('FORM PROPS: ', props.props[2].item)
  // console.log('FORM PROPS2: ', props.props.initialState[2].item)
  // console.log('HANDLE CHANGES', props.props.handleChanges)
  return (

    <div>
    <h1>Input Todo</h1>
    <form onSubmit={handleSubmit}>
    <input
    className="todo-input"
    type="text"
    name="newTodo"
    value={newTodo}
    onChange={handleChanges}
    id='newTodo'
    // placeholder={props.props[2].item}
  
    />
    <button onClick={handleSubmit}>Update List</button>
    </form>

    </div>

    // <div>
    // <h1>Input Todo</h1>
    // <input
    // className="todo-input"
    // type="text"
    // name="newTodo"
    // value={props.newTodo}
    // onChange={props.handleChanges}
    // // placeholder={props.props[2].item}
    // placeholder={props.props.initialState[2].item}
    // />
    // <button onClick={props.handleChanges}>Update List</button>
    

    // </div>
  )
}

export default ToDoForm