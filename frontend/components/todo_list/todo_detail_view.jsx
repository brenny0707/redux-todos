import React from 'react';

const TodoDetailView = (props) => {

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteTodo(todo.id);
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoDetailView;