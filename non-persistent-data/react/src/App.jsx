import { useState } from "react";
import "./App.css";
const todosList = [
  { id: 1, title: "Hello World", done: false },
  { id: 2, title: "Bye World", done: false },
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
      <form onSubmit={handleAddTodo} className="add-todo">
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit"> ➕ </button>
      </form>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

function TodoList({ todos, setTodos }) {
  function toggleDone(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggle={() => toggleDone(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
    </ul>
  );
}
function Todo({ todo, onToggle, onDelete }) {
  return (
    <li className="todo">
      <input type="checkbox" checked={todo.done} onChange={onToggle} />
      <p className={todo.done ? "done" : ""}> {todo.title}</p>
      <span onClick={onDelete} className="delete">🚮</span>
    </li>
  );
}

export default App;
