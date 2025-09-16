export const initialState = [
  {id: 1, text: "the first todo", done: false},
  {id: 2, text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'DONE':
      return state.map(todo =>
        todo.id === action.id ? {...todo, done: !todo.done} : todo
      );
    case 'ADD':
      return [
        ...state,
        action.todo
      ].sort((a, b) => a.id - b.id);
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);
    case 'LOAD_TODOS':
      return action.todos;
    case 'UPDATE_TEXT':
      return state.map(todo =>
        todo.id === action.id ? {...todo, text: action.text} : todo
      );
    default:
      return state;
  }
};
