
const tasksList = [];

const taskFactory = (name, date, priority, projectid) => {
    return { name , date, priority, projectid}
}

const createTask = (name, date, priority, projectid) => {
    const newTask = taskFactory(name, date, projectid);
    tasksList.push(newTask);
}

export { tasksList }
