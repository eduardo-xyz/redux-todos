import { CREATE_TODO, REMOVE_TODO, MARK_AS_COMPLETED } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter(todo => todo.text !== text);
    }
    case MARK_AS_COMPLETED: {
      const { text } = payload;
      return state.map(todo => {
        if (text === todo.text) {
          todo.isCompleted = true;
        }
        return todo;
      });
    }
    default: {
      return state;
    }
  }
};
