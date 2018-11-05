import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { deleteTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
    receiveSteps: (steps) => dispatch(receiveSteps(steps)),
  }
};

export default connect(null, mapDispatchToProps)(TodoDetailView)