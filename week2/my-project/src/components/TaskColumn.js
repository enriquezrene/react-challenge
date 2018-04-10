import React from 'react';

function Task(props) {
    return (
        <div>
            {props.description}
        </div>
    );
}

function TaskTitle(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
}

function TaskColumn(props) {
    return (
        <div className={props.position}>
            <TaskTitle title={props.title}/>
            <Task description={props.taskOne}/>
            <Task description={props.taskTwo}/>
        </div>
    );
}

export default TaskColumn;