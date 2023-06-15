import "./index.css";

const Button = ({ textContent, isDelete = false, handleClick }) => {
  return (
    <button
      className={`Button ${isDelete ? "deleteBtn" : "completedBtn"}`}
      onClick={handleClick}
    >
      {textContent}
    </button>
  );
};

export default Button;