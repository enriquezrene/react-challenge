import React from 'react';

const Task = (props) => {
    console.log(props.handler);
    return (
        <div onClick={props.handler}>
            {props.description}
        </div>
    );
}

export default Task;