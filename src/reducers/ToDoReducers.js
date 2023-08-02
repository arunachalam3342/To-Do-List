const ToDoReducers = (state = { todos: [] }, action) => {
    switch (action.type) {
        case "ADD":
            return { todos: action.payload, ...state.todos };

        case "DELETE":
            return { todos: action.payload };

        case "SET_TODOS":
            return { todos: action.payload }

        default:
            return state;
    }
}
export default ToDoReducers;