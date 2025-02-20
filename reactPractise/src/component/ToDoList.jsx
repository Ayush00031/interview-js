import { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const removeTodo = () => {};

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your todos"
          style={{ padding: "10px", margin: "20px", height: "80px" }}
        />
        <button type="submit">Add Todo</button>
        <button onClick={removeTodo}>remove</button>
      </form>

      <ul>
        {todo.map((todos, index) => (
          <li key={index}>{todos}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
