import { useState } from "react";
import List from "./components/List";
import Film from "./components/Films";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const addToTodo = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <p>{todo}</p>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={() => setTodos([...todos, todo])}>Add todo</button>
      <List value={todos} />
      <Film />
    </div>
  );
}

export default App;
