import React from 'react';

const TodoListItem = (props) => {
  const { todo } = props;
  console.log(todo);
  return (
    <li>{todo.title}</li>
  )
}

export default TodoListItem;