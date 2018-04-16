import React from 'react';
import ReactDOM from 'react-dom';
import TaskColumContainer from './components/todo/TaskColumContainer';
import Clock from './components/Clock';
import Counter from './components/counter/Counter'
import {createStore} from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter);

const todoData = {
  position: 'left',
  title: 'To do',
  type: 'todo'
};

const doingData = {
  position: 'center',
  title: 'In progress',
  type: 'doing'
};

const doneData = {
  position: 'right',
  title: 'Done',
  type: 'done'
};

function App() {
  return (
    <div className="container">
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>
      <TaskColumContainer
        position={todoData.position}
        title={todoData.title}
        type={todoData.type}/>
      <TaskColumContainer
        position={doingData.position}
        title={doingData.title}
        type={doingData.type}/>
      <TaskColumContainer
        position={doneData.position}
        title={doneData.title}
        type={doneData.type}/>
      <Clock/>
    </div>
  );
}

const render = () => {
  ReactDOM.render(
    <App/>, document.getElementById('mount'));
};
store.subscribe(render);

document.addEventListener('DOMContentLoaded', render);