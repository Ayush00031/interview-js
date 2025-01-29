// src/TaskBoard.js
import { useState } from "react";
import "./TaskBoard.css";
const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      text: newTask,
      status: "todo",
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const moveTask = (id, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="task-board">
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="columns">
        <div className="column">
          <h2>To Do</h2>
          {getTasksByStatus("todo").map((task) => (
            <div key={task.id} className="task">
              <span>{task.text}</span>
              <button onClick={() => moveTask(task.id, "inprogress")}>
                Start
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>
        <div className="column">
          <h2>In Progress</h2>
          {getTasksByStatus("inprogress").map((task) => (
            <div key={task.id} className="task">
              <span>{task.text}</span>
              <button onClick={() => moveTask(task.id, "done")}>
                Complete
              </button>
              <button onClick={() => moveTask(task.id, "todo")}>Reopen</button>
            </div>
          ))}
        </div>
        <div className="column">
          <h2>Done</h2>
          {getTasksByStatus("done").map((task) => (
            <div key={task.id} className="task">
              <span>{task.text}</span>
              <button onClick={() => moveTask(task.id, "inprogress")}>
                Reopen
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
