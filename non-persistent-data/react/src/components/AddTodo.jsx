export default function AddTodo({ onAdd, todoTitle, setTodoTitle }) {
  return (
    <form onSubmit={onAdd} className="add-todo">
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Add new todo..."
        aria-label="Todo input"
      />
      <button type="submit"> ➕ </button>
    </form>
  );
}
