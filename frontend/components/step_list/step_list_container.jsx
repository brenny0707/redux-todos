import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const todoId = ownProps.todo.id;
  const todoSteps = state.steps[todoId];
  return {
    todoId,
    steps: stepsByTodoId(state, todoId),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveStep: (step) => dispatch(receiveStep(step)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList);