import { renderProjectTasks } from "./display";
import { projectsArray } from "./projects"

const taskFactory = (name, date, priority) => {
    return { name , date, priority}
}

const createTask = (projectIndex, name, date, priority) => {
    const newTask = taskFactory(name, date, priority);
    projectsArray[projectIndex].projectTasks.push(newTask);
}

const removeTask = (projectIndex, taskIndex) => {
    projectsArray[projectIndex].projectTasks.splice(taskIndex, 1);
    renderProjectTasks(projectsArray[projectIndex], projectIndex);
}


export { taskFactory, createTask, removeTask }
