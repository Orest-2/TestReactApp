import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  todoRequestStarted,
  todoRequestUpdate
} from '../../store/todo/actions';

const Home = () => {
  const dispatch = useDispatch();
  const todoIsLoading = useSelector(state => state.todo.isLoading);
  const todoItems = useSelector(state => state.todo.items);

  useEffect(() => {
    dispatch(todoRequestStarted());
  }, [dispatch]);

  const complete = todo => {
    todo.completed = !todo.completed;

    dispatch(todoRequestUpdate(todo));
  };

  return (
    <div>
      <h1>Home</h1>
      <p>{todoIsLoading ? 'YES' : 'NO'}</p>
      <ul>
        {Object.keys(todoItems).map(key => {
          const todo = todoItems[key];
          return (
            <li
              className={todo.completed ? 'bg-success' : ''}
              key={todo.id}
              onClick={complete.bind(this, todo)}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
