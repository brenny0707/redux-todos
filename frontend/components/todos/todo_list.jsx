import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';
const TodoList = (props) => (
  <div className='todo-list-div'>
    <TodoForm receiveTodo={props.receiveTodo}/>
    <ul>
        {props.todos.map( (todo) => (
        <TodoListItem
        key={`${todo.id}-title`}
        todo={todo} 
        deleteTodo={props.deleteTodo} 
        receiveTodo={props.receiveTodo}/>
      ))}
    </ul>
  </div>

)

export default TodoList;