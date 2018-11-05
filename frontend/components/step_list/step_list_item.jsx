import React from 'react';

const StepListItem = (props) => {
  const { step, removeStep, receiveStep } = props;
  const doneStatusText = step.done ? 'Undo' : 'Done';

  const toggleStatus = (e) => {
    e.preventDefault();
    const updatedStep = Object.assign({}, step, {done: !step.done});
    receiveStep(updatedStep);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    removeStep(step.id);
  }
  return (
    <div>
      <span>{step.title}</span>
      <button onClick={toggleStatus}>{doneStatusText}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default StepListItem;