import { connect } from 'react-redux';
import TodoList from './todo_list';

import { allTodos } from '../../reducers/selectors';
import { receiveTodos, receiveTodo, deleteTodo } from '../../actions/todo_actions';
const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);