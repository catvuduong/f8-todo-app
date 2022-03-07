import { SET_TODO_INPUT, ADD_TODO } from "./constants";

export const setToDoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})