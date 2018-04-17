import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/todo/TodoApp';



const render = () => {
  ReactDOM.render(
    <TodoApp/>, document.getElementById('mount'));
};

document.addEventListener('DOMContentLoaded', render);