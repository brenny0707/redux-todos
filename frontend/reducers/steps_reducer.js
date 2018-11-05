import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/step_actions';

const sampleState = {
  1: {
    id: 1,
    title: 'walk to store',
    done: false,
    todoId: 1
  },
  2: {
    id: 2,
    title: 'buy soap',
    done: false,
    todoId: 1
  }
};

const stepReducer = (state = sampleState, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_STEPS:
      const stepsObj = {};
      action.steps.forEach( step => {
        stepsObj[step.id] = step;
      })
      newState = Object.assign({}, state, stepsObj);
      return newState;
    case RECEIVE_STEP:
      newState = Object.assign({}, state, {[action.step.id]: action.step});
      return newState;
    case REMOVE_STEP:
      newState = Object.assign({}, state);
      delete newState[action.stepId];
      return newState;
    default:
      return state
  }
}

export default stepReducer;