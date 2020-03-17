export const initialState = [
  {
  item: 'Learn about reducers',
  id: 23436436354,
  done: false,
  
},

{
  item: 'Complete Todos',
  id: 4234235,
  done: false,
  
},
{
  item: 'Input Functionality',
  id: 4234223435,
  done: false,
  
}
]

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO" :
      return [...state, {item: action.item, done: false, id: action.id}];

      default:
        return state
  }
}