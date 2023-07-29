export const ADDToDoActions = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();

    const hasTodo = todos.find((i) => i.todo === todo);

    if (!hasTodo && todo !== '') {
        dispatch({
            type: "ADD",
            payload: [...todos, { id: todo, todo }],
        })
    }
}




export const DELETEToDoActions = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();


    dispatch({
        type: "DELETE",
        payload: todos.filter((t) => t.id !== todo.id),
    })

}

