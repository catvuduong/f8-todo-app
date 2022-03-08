import { ADD_TODO, EDIT_TODO, SET_TODO_INPUT, SET_TODO_INPUT_EDIT } from "./constants";

const initState = {
    todoInput: '',
    todoInputEdit: '',
    todos: []
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }

        case SET_TODO_INPUT_EDIT:
            // console.log(action.payload);
            return {
                ...state,
                todoInputEdit: action.payload
            }
        case ADD_TODO:
            // console.log(action.payload);
            if (!action.payload.work || /^\s*$/.test(action.payload.work)) { return { ...state } }
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoInput: ""
            }
        case EDIT_TODO:
            console.log(action.payload);
            if (!action.payload.work || /^\s*$/.test(action.payload.work)) { return { ...state } }
            let editTodos = [...state.todos];
            const index = editTodos.findIndex(item => item.id === action.payload.id);
            console.log(index);
            if (index !== -1) {
                // console.log("test1")
                editTodos[index].work = action.payload.work;
            }
            console.log(state)
            return {
                ...state,
                todos: [...editTodos],
                todoInputEdit: ''
            }
        default:
            throw new Error("Invalid action.")
    }
}

export { initState }
export default reducer;