console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Welcome from './components/Welcome'
import Comment from './components/Comment'
import TaskColum from './components/TaskColumn'
 
const todoData = {
  position: 'left',
  title: 'To do',
  taskOne: 'Learn React',
  taskTwo: 'Master React',
};

const doingData = {
  position: 'center',
  title: 'In progress',
  taskOne: 'Learning React',
  taskTwo: '...',
};

const doneData = {
  position: 'right',
  title: 'Done',
  taskOne: 'Function components',
  taskTwo: '...',
};

function App() {
  return (
    <div className="container">
      <TaskColum position={todoData.position} title={todoData.title} taskOne={todoData.taskOne} taskTwo={todoData.taskTwo} />
      <TaskColum position={doingData.position} title={doingData.title} taskOne={doingData.taskOne} taskTwo={doingData.taskTwo} />
      <TaskColum position={doneData.position} title={doneData.title} taskOne={doneData.taskOne} taskTwo={doneData.taskTwo} />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('mount')
  );
});

// const todo = <TaskColum />
// const element = <Welcome name="Rene" />;

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64',
//   },
// };


// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//     document.getElementById('mount')
//   );
// });