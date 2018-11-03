import React from 'react';

const TodoListItem = (props) => {
  const { todo, deleteTodo } = props;
  if (!todo) return null;
  const toggleStatus = todo.done ? "Undo" : "Done"

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteTodo(todo.id);
  }

  return (
    <li>
      <span>{todo.title}</span>
      <button>{toggleStatus}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default TodoListItem;