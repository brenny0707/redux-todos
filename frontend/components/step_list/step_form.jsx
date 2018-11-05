import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'title': "",
      'done': false,
      'todoId': props.todoId,
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(prop) {
    return (e) => {
      e.preventDefault();
      this.setState({[prop]: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    function uniqueId() {
      return new Date().getTime();
    }

    e.preventDefault();
    const newStep = {
      'id': uniqueId(),
      'title': this.state.title,
      'done': this.state.done,
      'todoId': this.state.todoId,
    }
    this.props.receiveStep(newStep);
    this.setState({
      'title': "",
      'done': false,
      'todoId': this.props.todoId,
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.update('title')}/>
        <button>Create Step</button>
      </form>
    )
  }
}

export default StepForm;