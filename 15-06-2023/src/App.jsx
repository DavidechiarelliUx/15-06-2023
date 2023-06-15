import TodoForm from './components/form/TodoForm';
import { todoList } from './mocks/todo-list';
import './App.css'
import Filter from './components/TodoList/TodoList';
import TodoList2 from './components/TodoList2';
import TodoList3 from './components/TodoList3';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="form-container">
        <TodoForm />
      </div>
      <div className="list-container">
        <div className="list-item">
          <Filter todoList={todoList} />
        </div>
        <div className="list-item">
          <TodoList2/>
        </div>
        <div className="list-item">
          <TodoList3 />
        </div>
      </div>
    </div>
  );
}

export default App;