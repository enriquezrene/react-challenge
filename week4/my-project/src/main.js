import React from 'react';
import ReactDOM from 'react-dom';
import TaskColum from './components/todo/TaskColumn'

const todoData = {
  position: 'left',
  title: 'To do',
  tasks: ['Learn React', 'Master React']
};

const doingData = {
  position: 'center',
  title: 'In progress',
  tasks: ['Learning React']
};

const doneData = {
  position: 'right',
  title: 'Done',
  tasks: ['Function components', 'Class based components', 'Project boilerplate']
};

function App() {
  return (
    <div className="container">
      <TaskColum position={todoData.position} title={todoData.title} tasks={todoData.tasks}/>
      <TaskColum position={doingData.position} title={doingData.title} tasks={doingData.tasks} />
      <TaskColum position={doneData.position} title={doneData.title} tasks={doneData.tasks} />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App />,
    document.getElementById('mount')
  );
});