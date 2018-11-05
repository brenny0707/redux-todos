
export const allTodos = (state) => {
  const keys = Object.keys(state.todos);
  return keys.map( (key) => {
    return state.todos[key];
  })
}

export const stepsByTodoId = (state, todoId) => {
  const stepArr = [];
  const keys = Object.keys(state.steps);
  keys.forEach ( (key) => {
    const step = state.steps[key];
    if (step.todoId === todoId) stepArr.push(step);
  })
  return stepArr;
}