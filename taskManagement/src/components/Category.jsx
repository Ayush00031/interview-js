import { useContext } from "react";
import TaskContext from "../context/TaskContext";

import Task from "./Task";

const Category = ({ category }) => {
  const { categories, setCategories } = useContext(TaskContext);

  const onDrop = (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("taskId");
    const sourceCategory = event.dataTransfer.getData("sourceCategory");

    // Find the task to move
    const taskToMove = categories[sourceCategory].find(
      (task) => task.id === taskId
    );

    // Update categories
    setCategories({
      ...categories,
      [sourceCategory]: categories[sourceCategory].filter(
        (task) => task.id !== taskId
      ),
      [category]: [...categories[category], taskToMove],
    });
  };

  const allowDrop = (event) => event.preventDefault();

  return (
    <div
      onDrop={onDrop}
      onDragOver={allowDrop}
      style={{
        border: "1px solid gray",
        padding: "10px",
        width: "300px",
        minHeight: "400px",
      }}
    >
      <h2>{category}</h2>
      {categories[category]?.map((task) => (
        <Task key={task.id} task={task} category={category} />
      ))}
    </div>
  );
};

export default Category;
