import React from 'react';

const TodoListItem = (props) => {
  const { todo, deleteTodo } = props;
  if (!todo) return null;
  const toggleStatus = todo.done ? "Undo" : "Done"

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteTodo(todo.id);
  }

  const toggleDone = (e) => {
    e.preventDefault();
    const updatedTodo = Object.assign({}, todo, {'done': !todo.done});
    console.log(todo);
    console.log(updatedTodo);
    props.receiveTodo(updatedTodo)
  }

  return (
    <li>
      <span>{todo.title}</span>
      <button onClick={toggleDone}>{toggleStatus}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default TodoListItem;