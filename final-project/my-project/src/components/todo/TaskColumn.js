import React from 'react';
import Task from './Task';
import TaskTitle from './TaskTitle'

const TaskColumn = (props) => {

    let a = function click(event) {
        console.log(event.target);
    }

    let tasks = props
        .tasks
        .map((item) => {
            return <Task description={item} handler={a}/>;
        });
    return (
        <div className={props.position}>
            <TaskTitle title={props.title}/> {tasks}
        </div>
    );
}

export default TaskColumn;