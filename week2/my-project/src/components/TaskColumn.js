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

class TaskColumn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.position}>
                <TaskTitle title={this.props.title}/>
                <Task description={this.props.taskOne}/>
                <Task description={this.props.taskTwo}/>
            </div>
        );
    }
    
}

export default TaskColumn;