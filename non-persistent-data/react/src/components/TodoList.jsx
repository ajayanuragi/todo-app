import Todo from "./Todo";

export function TodoList({ todos, setTodos }) {
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
    <ul className="todo-container">
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
