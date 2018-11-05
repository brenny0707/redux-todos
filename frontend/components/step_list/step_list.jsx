import React from 'react';
import StepListItem from './step_list_item_container';

const StepList = (props) => {
  return (
    <ul>
      {props.steps.map( (step) => (
        <StepListItem key={step.id} step={step}/>
      ))}
    </ul>
  )
}

export default StepList;