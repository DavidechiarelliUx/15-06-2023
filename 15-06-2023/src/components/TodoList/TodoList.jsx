import { useState } from "react";
import Todo from "../todo/Todo";
import "./index.css";

const Filter = ({ todoList }) => {
  const [filterLength, setFilterLength] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState(todoList);
  const [filteredCount, setFilteredCount] = useState(todoList.length);

  const handleFilter = (length) => {
    setFilterLength(length);
    if (length === 0) {
      setFilteredTodos(todoList);
      setFilteredCount(todoList.length);
    } else {
      const filtered = todoList.filter((todo) => todo.title.length <= length);
      setFilteredTodos(filtered);
      setFilteredCount(filtered.length);
    }
  };

  return (
    <div className="Filter">
      <div className="Filter__header">
        <h2>Todo List</h2>
        <p>Total: {filteredCount}</p>
      </div>
      <div className="Filter__filters">
        <button onClick={() => handleFilter(0)}>All</button>
        <button onClick={() => handleFilter(16)}>Filtra i todo corti</button>
        <button onClick={() => handleFilter(32)}>Filtra i todo intermedi</button>
        <button onClick={() => handleFilter(50)}>Filtra i todo tosti</button>
      </div>
      <div className="Filter__todos">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} data={todo} />
        ))}
      </div>
    </div>
  );
};

export default Filter;