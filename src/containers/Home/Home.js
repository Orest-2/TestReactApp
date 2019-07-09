import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoRequestStarted } from '../../store/todo/actions';
import Spinner from '../../components/Spinner';
import TodoList from '../../components/TodoList/TodoList';

const Home = () => {
  const dispatch = useDispatch();
  const todoIsLoading = useSelector(state => state.todo.isLoading);

  useEffect(() => {
    dispatch(todoRequestStarted());
  }, [dispatch]);

  return (
    <div>
      <h1>Todo list</h1>
      {todoIsLoading ? <TodoList /> : <Spinner />}
    </div>
  );
};

export default Home;
