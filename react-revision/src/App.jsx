import { useState } from "react";
import "./App.css";
import Parent from "./prop drilling/parent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>CountDown </p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <Parent />
    </>
  );
}

export default App;
