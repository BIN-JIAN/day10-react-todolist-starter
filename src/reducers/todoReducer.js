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
      ];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);
    case 'LOAD_TODOS':
      return action.todos;
    default:
      return state;
  }
};
