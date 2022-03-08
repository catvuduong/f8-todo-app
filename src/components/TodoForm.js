import { useEffect, useRef, useState } from 'react';
import { useStore, actions } from '../store';

function TodoForm({ edit, setEdit }) {
    const [state, dispatch] = useStore();
    // const [edit, setEdit] = useState(edit);
    let { todoInput, todoInputEdit } = state;
    // let [edit] = useState(edit)
    const inputRef = useRef(null);

    // const initFetch = useCallback(() => {
    //     dispatch(actions.setToDoInputEdit(edit.work))
    // }, [dispatch]);

    // useEffect(() => {
    //     initFetch();
    // }, [initFetch]);
    console.log(edit);

    const handleEdit = (edit, dispatch) => {
        if (edit) {
            dispatch(actions.setToDoInputEdit(edit.work))
        };
    }

    useEffect(() => {
        // console.log(edit);
        handleEdit(edit, dispatch);
    }, [edit])

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleAdd = e => {
        e.preventDefault();
        dispatch(actions.addTodo({
            id: Math.floor(Math.random() * 1000),
            work: todoInput
        }))
    }

    const handleUpdate = e => {
        e.preventDefault();
        dispatch(actions.updateTodo({
            id: edit.id,
            work: todoInputEdit
        }))
        setEdit({ id: null, work: '' });
    }

    return (
        <form className='todo-form'>
            {edit ?
                (<>
                    <input
                        className='todo-input edit'
                        placeholder='Update your item'
                        value={todoInputEdit}
                        name='text'
                        ref={inputRef}
                        onChange={e => {
                            dispatch(actions.setToDoInputEdit(e.target.value));
                        }}
                    />
                    <button
                        onClick={handleUpdate}
                        className='todo-button edit'>
                        Update
                    </button>
                </>) :
                (<>
                    <input
                        className='todo-input'
                        placeholder="Enter todo..."
                        value={todoInput}
                        name='text'
                        ref={inputRef}
                        onChange={e => {
                            dispatch(actions.setToDoInput(e.target.value));
                        }}
                    />
                    <button className='todo-button' onClick={handleAdd}>Add todo</button>
                </>)
            }
        </form>
    )
}


export default TodoForm;