import React from 'react';
import Task from './Task';
import TaskTitle from './TaskTitle'

const TaskColumn = (props) => {
    let tasks = props.tasks.map((item)=>{
        return <Task description={item}/>;
    });
    return (
        <div className={props.position}>
            <TaskTitle title={props.title}/>
            {tasks}
        </div>
    );
}

export default TaskColumn;