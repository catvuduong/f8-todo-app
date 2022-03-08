import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="todo-app">
      <h1>What's the Plan for Today?</h1>
      <TodoForm />
      <Todo />
    </div>
  );
}

export default App;
