class TaskService {

    queryTasks(type) {
        return fetch('http://5acf33014e5b600014a10282.mockapi.io/api/' + type);
    }
}

export default TaskService;