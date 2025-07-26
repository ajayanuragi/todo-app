import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
const todosList = [
  { id: 1, title: "Create a todo", done: false },
  { id: 2, title: "Mark todo as done", done: false },
];
function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState(todosList);
  function handleAddTodo(e) {
    e.preventDefault();
    if (todoTitle.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setTodoTitle("");
  }

  return (
    <div className="app">
      <AddTodo
        onAdd={handleAddTodo}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App;
