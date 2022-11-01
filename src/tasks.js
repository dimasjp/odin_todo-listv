import { addTaskToProject, projectsArray } from "./projects"

const taskFactory = (name, date, priority) => {
    return { name , date, priority}
}

const createTask = (name, date, priority) => {
    const newTask = taskFactory(name, date, priority);
    addTaskToProject(newTask);
}


export { taskFactory, createTask }
