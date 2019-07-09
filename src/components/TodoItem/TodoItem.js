import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { todoRequestUpdate } from '../../store/todo/actions';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const complete = todo => {
    todo.completed = !todo.completed;

    dispatch(todoRequestUpdate(todo));
  };

  return (
    <li
      className={`align-middle ${styles.todoItem} ${
        todo.completed ? ' bg-success' : ''
      }`}
      key={todo.id}
      onClick={complete.bind(this, todo)}
    >
      {todo.title}
    </li>
  );
};

TodoItem.protoType = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired
};

export default TodoItem;
