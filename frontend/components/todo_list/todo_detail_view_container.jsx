import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
  }
};

export default connect(null, mapDispatchToProps)(TodoDetailView)