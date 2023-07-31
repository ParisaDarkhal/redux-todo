const initialState = { todos: [] };
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { todos } = state;

      return {
        ...state,
        todos: [
          ...todos,
          {
            id: action.payload.id,
            text: action.payload.text,
          },
        ],
      };
      break;

    case "REMOVE_TODO":
      return {
        ...state,
        todos: [
          ...todos,
          {
            id: action.payload.id,
            text: action.payload.text,
          },
        ],
      };

    default:
      return state;
  }
};
