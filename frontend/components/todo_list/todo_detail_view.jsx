import React from 'react';
import StepList from '../step_list/step_list_container';

const TodoDetailView = (props) => {
  const { todo } = props;
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteTodo(todo.id);
  }

  return (
    <div>
      <StepList todo={todo}/>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoDetailView;