import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'title': '',
      'body': '',
      'done': false,
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(prop) {
    return (e) => {
      this.setState({[prop]: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    function uniqueId() {
      return new Date().getTime();
    }

    e.preventDefault();
    const todo = {
      'title': this.state.title,
      'body': this.state.body,
      'done': this.state.done,
      'id': uniqueId(),
    }
    this.props.receiveTodo(todo);
    this.setState({
      'title': '',
      'body': '',
      'done': false,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.update('title')} value={this.state.title} placeholder='Title'/>
        <input type="text" onChange={this.update('body')} value={this.state.body} placeholder='Body'/>
        <button>Submit</button>
      </form>
    )
  }
}

export default TodoForm;