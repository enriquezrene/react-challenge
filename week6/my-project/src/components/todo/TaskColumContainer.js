import React from 'react';
import TaskColumn from './TaskColumn'
import TaskService from './services/TaskService'

class TaskColumnContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        const taskService = new TaskService();
        taskService
            .queryTasks(this.props.type)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({tasks: data.tasks});
            })
    }

    render() {
        return <TaskColumn
            tasks={this.state.tasks}
            position={this.props.position}
            title={this.props.title}/>;
    }
}

export default TaskColumnContainer;