import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { removeStep, receiveStep } from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    step: ownProps.step,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeStep: (stepId) => dispatch(removeStep(stepId)),
    receiveStep: (step) => dispatch(receiveStep(step)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepListItem);