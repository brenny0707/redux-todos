import React from 'react';
import StepListItem from './step_list_item_container';
import StepForm from './step_form_container';

const StepList = (props) => {
  return (
    <ul>
      <StepForm todoId={props.todoId}/>
      {props.steps.map( (step) => (
        <StepListItem key={step.id} step={step}/>
      ))}
    </ul>
  )
}

export default StepList;