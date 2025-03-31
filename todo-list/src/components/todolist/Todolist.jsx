import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Todolist.css";

const Todolist = ({ tasks, setTasks, filter, setTask }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleClickAction = (id, action) => {
    switch (action) {
      case "markAsDone": {
        const updatedTasks = tasks.map((item) =>
          item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        );
        setTasks(updatedTasks);
        break;
      }
      case "edit": {
        console.log(`Edit task with id: ${id}`);
        break;
      }
      case "delete": {
        if (confirm("Are you sure you want to delete this task?")) {
          const remainingTasks = tasks.filter((item) => item.id !== id);
          setTasks(remainingTasks);
        }
        break;
      }
      default:
        console.warn("Unknown action:", action);
        break;
    }
  };

  useEffect(() => {
    if (tasks.length === 0) {
      setFilteredTasks([]);
      return;
    }

    let filtered = tasks;
    switch (filter) {
      case "Active":
        filtered = tasks.filter((item) => !item.isCompleted);
        break;
      case "Completed":
        filtered = tasks.filter((item) => item.isCompleted);
        break;
      default:
        break;
    }
    setFilteredTasks(filtered);
  }, [filter, tasks]);

  return (
    <div className="todo-list-container">
      <ul className="todo-list-items">
        {filteredTasks.length === 0 && (
          <li className="todo-list-item empty-message">No task available.</li>
        )}

        {filteredTasks.map((task) => {
          const fillColor = task.isCompleted ? "#006400" : "#9fc09f";

          return (
            <li className="todo-list-item" key={`item_${task.id}`}>
              <div className="todo-task-title">
                <span 
                  onClick={() => handleClickAction(task.id, "markAsDone")} 
                  title="Mark as completed"
                  className="task-title-text"
                >
                  <FontAwesomeIcon 
                    className="check-icon" 
                    style={{ color: fillColor }} 
                    icon={faCircleCheck} 
                  /> 
                  <span className="task-text">{task.title}</span>
                </span>
              </div>
              <div className="todo-items-actions">
                <span title="Edit" onClick={() => setTask(task, "edit")}>
                  <FontAwesomeIcon className="edit-icon" icon={faFilePen} />
                </span>
                <span title="Delete" onClick={() => handleClickAction(task.id, "delete")}>
                  <FontAwesomeIcon className="delete-icon" icon={faTrash} />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todolist;