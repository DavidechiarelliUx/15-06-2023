import React, { useState } from 'react';
import { todoList } from '../../mocks/todo-list';
import Button from '../Button/Button';

const userImgPlaceHolder =
  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

const Todo = ({ data }) => {
  const [completed, setCompleted] = useState(data.completed);
  const [deleted, setDeleted] = useState(data.deleted);

  const handleCompleteClick = () => {
    setCompleted(true);
    setDeleted(false);
  };

  const handleDeleteClick = () => {
    setCompleted(false);
    setDeleted(true);
  };

  return (
    <div className={`Todo ${completed ? "true" : ""} ${deleted ? "false" : ""}`}>
      <p>{data.id}</p>
      <div className="Todo__content">
        <img src={data?.userImg || userImgPlaceHolder} alt={data.title} />
        <h3>{data.title}</h3>
      </div>
      <div className="Todo__actions">
        <Button textContent="Complete" handleClick={handleCompleteClick} />
        <Button textContent="Delete" handleClick={handleDeleteClick} />
      </div>
    </div>
  );
};

const TodoList2 = () => {
  const todoListSlice = todoList.slice(0, 50);

  return (
    <div>
      <h2>TodoList 2</h2>
      <ul>
        {todoListSlice.map(todo => (
          <li key={todo.id}>
            <Todo data={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList2;