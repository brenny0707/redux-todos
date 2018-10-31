import React from 'react';

const TodoListItem = (props) => {
  const { todo } = props;
  if (!todo) return null;
  return (
    <li>{todo.title}</li>
  )
}

export default TodoListItem;