import React, { useEffect, useRef, useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ handleAddTask, task }) => {
  const [text, setText] = useState("");
  const [invalid, setInvalid] = useState(false)
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setInvalid(true)
      inputRef.current.focus();
      return;
    };

    handleAddTask(text, task?.id || "");

    setText("");
  };

  const handleChange = (e) => {
    if (setText?.length > 0) {
      setInvalid(false);
    }
    setText(e.target.value);
  };

  useEffect(() => {
    if (task) setText(task.title || "");
  }, [task]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="form-input-row">
            <input
              ref={inputRef}
              type="text"
              className={`tasks-input ${invalid ? `invalid` : `valid`}`}
              placeholder="Enter your task here.."
              value={text}
              onChange={handleChange}
            />
          </div>
          <div className="form-btn">
            <button className="add-btn">{task ? `UPDATE` : `ADD`}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;

