import { projectsArray } from "./projects"

const taskFactory = (name, date, priority) => {
    return { name , date, priority}
}

const createTask = (name, date, priority) => {
    const newTask = taskFactory(name, date, priority);
    projectsArray[0].projectTasks.push(newTask);
}


export { taskFactory, createTask }
