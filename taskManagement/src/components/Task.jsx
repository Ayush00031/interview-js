import PropTypes from "prop-types";

const Task = ({ task, category }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData("taskId", task.id);
    event.dataTransfer.setData("sourceCategory", category);
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h4>{task.title}</h4>
      <p>Assignee: {task.assignee || "Unassigned"}</p>
      <p>Priority: {task.priority || "Normal"}</p>
      <p>Deadline: {task.deadline || "None"}</p>
    </div>
  );
};
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    assignee: PropTypes.string,
    priority: PropTypes.string,
    deadline: PropTypes.string,
  }).isRequired,
  category: PropTypes.string.isRequired,
};

export default Task;
