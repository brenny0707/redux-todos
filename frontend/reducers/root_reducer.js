import { combineReducers } from 'redux';
import todoReducer from './todos_reducer';
import stepReducer from './steps_reducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  steps: stepReducer,
})

export default rootReducer;