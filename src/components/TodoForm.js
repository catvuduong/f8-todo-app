import { useStore, actions } from '../store';

function TodoForm() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
    }

    return (
        <form className='todo-form'>
            <input
                className='todo-input'
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(actions.setToDoInput(e.target.value));
                }}
            />
            <button className='todo-button' onClick={handleAdd}>Add todo</button>
            <ul>{todos.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </form>
    )
}


export default TodoForm;