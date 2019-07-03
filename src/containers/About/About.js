import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const todoItems = useSelector(state => state.todo.items);

  return (
    <div className='row'>
      <h1>About</h1>
      <div>
        <p>{Object.keys(todoItems).length}</p>
      </div>
    </div>
  );
};

export default About;
