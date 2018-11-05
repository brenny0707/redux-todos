import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';
class TodoListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'detail': false,
    }
    this.updateDetail = this.updateDetail.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  updateDetail(e) {
    e.preventDefault();
    this.setState({'detail': !this.state.detail});
  }

  toggleDone(e) {
    e.preventDefault();
    const { todo, receiveTodo } = this.props;
    const updatedTodo = Object.assign({}, todo, {'done': !todo.done});
    receiveTodo(updatedTodo)
  }

  render() {
    const { todo } = this.props;
    if (!todo) return null;
    const toggleStatus = todo.done ? "Undo" : "Done"
    const detailView = this.state.detail ? <TodoDetailViewContainer todo={todo} /> : null
    return (
      <li>
        <span onClick={this.updateDetail}>{todo.title}</span>
        <button onClick={this.toggleDone}>{toggleStatus}</button>
        {detailView}
      </li>
    )
  }
}

export default TodoListItem;