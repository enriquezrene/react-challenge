import React from 'react';
import Task from './Task';
import TaskTitle from './TaskTitle'

const TaskColumn = (props) => {

    var tasks = props.tasks.map(function (item) {
        return <Task description={item} />;
    });

    return (
        <div className={props.position}>
            <TaskTitle title={props.title} />
            {tasks}
        </div>
    );

}

export default TaskColumn;