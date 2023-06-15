import "./index.css";

const TodoForm = () => {
  return (
<form className="TodoForm">
  <input id="todoInput" type="text" placeholder="Add Todo" />
  <div className="TodoForm__button">
    <button type="submit">Add Todo</button>
  </div>
</form>
  );
};

export default TodoForm;