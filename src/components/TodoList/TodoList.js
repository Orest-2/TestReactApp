import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.css';

const TodoList = () => {
  const todoItems = useSelector(state => state.todo.items);

  return (
    <ul className={styles.todoList}>
      {Object.keys(todoItems).map(key => {
        return <TodoItem key={key} todo={todoItems[key]} />;
      })}
    </ul>
  );
};

export default TodoList;
