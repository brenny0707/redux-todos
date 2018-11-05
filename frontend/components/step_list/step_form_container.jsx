import { connect } from 'react-redux';
import StepForm from './step_form';
import { receiveStep } from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    todoId: ownProps.todoId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveStep: (step) => dispatch(receiveStep(step)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepForm);