// import TodoForm from "./TodoForm";
import { useState } from 'react';
import { useStore } from '../store';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


function Todo() {
    const [state] = useStore()
    const { todos } = state;
    const [edit, setEdit] = useState({
        id: null,
        work: ''
    });

    if (edit.id) {
        console.log(edit);
        return <TodoForm edit={edit} setEdit={setEdit} />
    }

    return todos.map((item) => (
        <div
            className={'todo-row'}
            key={item.id}>
            <div
                key={item.id}
            // onClick={() => completeTodo(item.id)}
            >
                {item.work}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    // onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: item.id, work: item.work })}
                    className='edit-icon'
                />
            </div>
        </div>
    ))
}

export default Todo;