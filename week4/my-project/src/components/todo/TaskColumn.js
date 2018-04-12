import React from 'react';
import Task from './Task';
import TaskTitle from './TaskTitle'

class TaskColumn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        fetch('http://5acf33014e5b600014a10282.mockapi.io/api/' + this.props.type)
        .then(results => {
            return results.json();
        }).then(data => {
            let tasks = data.tasks.map((item)=>{
                return <Task description={item}/>;
            });
            this.setState ({tasks: tasks});
        })
    }

    render(){
        return (
            <div className={this.props.position}>
                <TaskTitle title={this.props.title}/>
                {this.state.tasks}
            </div>
        );
    }
}

export default TaskColumn;