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
      const nextId = state.length ? Math.max(...state.map(t => t.id)) + 1 : 1;
      return [
        ...state,
        { id: nextId, text: action.text, done: false }
      ];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
