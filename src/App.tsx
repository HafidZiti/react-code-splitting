import React from "react";
import Todo, { Itodo } from "./components/todo";

function App() {
  const todos: Itodo[] = [
    { id: 1, title: "todo-1", completed: false },
    { id: 2, title: "todo-2", completed: true },
    { id: 3, title: "todo-3", completed: false },
  ];
  return (
    <div className="App">
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo}></Todo>
      ))}
    </div>
  );
}

export default App;
