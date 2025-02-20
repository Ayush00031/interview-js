import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count:${count}`;
  }, [count]);

  return (
    <div>
      CounterEffect<h1> {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
