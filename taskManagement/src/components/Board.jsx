import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Category from "./Category";

const Board = () => {
  const categories = useContext(TaskContext);
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      {Object.keys(categories).map((category) => (
        <Category key={category} category={category} />
      ))}
    </div>
  );
};

export default Board;
