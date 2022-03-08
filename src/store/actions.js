import { SET_TODO_INPUT, ADD_TODO, SET_TODO_INPUT_EDIT, EDIT_TODO } from "./constants";

export const setToDoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const setToDoInputEdit = payload => ({
    type: SET_TODO_INPUT_EDIT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const updateTodo = payload => ({
    type: EDIT_TODO,
    payload
})