import { RECEIVE_TODO, RECEIVE_TODOS, DELETE_TODO } from '../actions/todo_actions';

const sampleTodoState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
}

const todosReducer = (state = sampleTodoState, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      const todosObj = {};
      action.todos.forEach( (todo) => {
        todosObj[todo.id] = todo;
      })
      newState = Object.assign({}, state, todosObj);
      return newState;
    case RECEIVE_TODO:
      newState = Object.assign({}, state, {[action.todo.id]: action.todo});
      return newState;
    case DELETE_TODO:
      newState = Object.assign({}, state);
      delete newState[action.todoId];
      return newState;
    default:
      return state;
  }
}

export default todosReducer;