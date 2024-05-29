const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_EDIT":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, editTodo: !todo.editTodo }
          : todo;
      });
    case "EDIT_TODO":
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? {
              ...todo,
              content: action.payload.content,
              date: action.payload.date,
              editTodo: !todo.editTodo,
            }
          : todo;
      });
    case "TOGGLE_COMPLETED":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo;
      });

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
