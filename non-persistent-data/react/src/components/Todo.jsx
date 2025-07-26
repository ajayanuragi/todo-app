export default function Todo({ todo, onToggle, onDelete }) {
  return (
    <li className="todo">
      <div className="flex">
        <input type="checkbox" checked={todo.done} onChange={onToggle} />
        <p className={todo.done ? "done" : ""}> {todo.title}</p>
      </div>

      <span onClick={onDelete} className="delete">
        🚮
      </span>
    </li>
  );
}
