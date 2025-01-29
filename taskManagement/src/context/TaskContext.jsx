import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => {
    const savedData = sessionStorage.getItem("taskCategories");
    return savedData
      ? JSON.parse(savedData)
      : {
          "TO DO": [],
          "IN PROGRESS": [],
          DONE: [],
        };
  });

  useEffect(() => {
    sessionStorage.setItem("taskCategories", JSON.stringify(categories));
  }, [categories]);
  return (
    <TaskContext.Provider value={{ categories, setCategories }}>
      {children}
    </TaskContext.Provider>
  );
};
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskContext;
