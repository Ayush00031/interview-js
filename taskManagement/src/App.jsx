import Board from "./components/Board";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <div
        style={{
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Task Management Application</h1>
        <Board />
      </div>
    </TaskProvider>
  );
};

export default App;
