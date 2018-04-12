import React from 'react';
import ReactDOM from 'react-dom';
import TaskColum from './components/todo/TaskColumn';
import Clock from './components/Clock';

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
      <TaskColum position={todoData.position} title={todoData.title} type={todoData.type}/>
      <TaskColum position={doingData.position} title={doingData.title} type={doingData.type} />
      <TaskColum position={doneData.position} title={doneData.title} type={doneData.type} />
      <Clock />
    </div>
  );
}


document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App />,
    document.getElementById('mount')
  );
});