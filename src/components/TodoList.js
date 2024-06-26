import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    })
  );
}

export default TodoList;
