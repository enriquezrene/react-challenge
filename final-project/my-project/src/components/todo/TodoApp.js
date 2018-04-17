import React from 'react';
import TaskColumn from './TaskColumn'

class TodoApp extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            todo: {
                position: 'left',
                title: 'To do',
                tasks: [
                    'Learn Redux', 'Unit tests'
                ]
            },
            doing: {
                position: 'center',
                title: 'In progress',
                tasks: ['Mastering React']
            },
            done: {
                position: 'right',
                title: 'Done',
                tasks: [
                    'React basics', 'Pluralsight IQ', 'React Challenge'
                ]
            }
        }
    }

    

    render() {
        return (
            <div className="container">
                <TaskColumn
                    position={this.state.todo.position}
                    title={this.state.todo.title}
                    tasks={this.state.todo.tasks}/>
                <TaskColumn
                    position={this.state.doing.position}
                    title={this.state.doing.title}
                    tasks={this.state.doing.tasks}/>
                <TaskColumn
                    position={this.state.done.position}
                    title={this.state.done.title}
                    tasks={this.state.done.tasks}/>
            </div>
        );
    }
}

export default TodoApp;