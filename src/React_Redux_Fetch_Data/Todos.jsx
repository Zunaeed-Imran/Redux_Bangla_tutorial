import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodos from './todosAction';



const Todos = () => {


// take loading, error, todos in a object const and take by state using useSelector function. 
  const { isLoading, todos, error } = useSelector((state) => state);


// take the dispatch function
  const dispatch = useDispatch();


// take useEffect fucntion
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);


  return (
    <>
      <h3>React Redux Fetch Data App</h3>
      <h2>Todos App</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos && todos.map((todo) => {
          return <article key={todo.id}>
            <h4>{todo.id}</h4>
            <h4>{todo.title}</h4>
          </article>
        })}
      </section>
    </>
  );
};

export default Todos;
