import { useState } from "react";
import Button from "../button";
import "./index.css";

const Todo = ({ data }) => {
  const userImgPlaceHolder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
  const [completed, setCompleted] = useState(data.completed);
  const [deleted, setDeleted] = useState(data.deleted);


  const handleCompleteClick = () => {
    setCompleted(true);
    setDeleted(false);
  };
  const handleDeleteClick = () => {
    setCompleted(false)
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
        <Button textContent="Delete"  handleClick={handleDeleteClick}/>
      </div>
    </div>
  );
};

export default Todo;