import { renderProjectTasks } from "./display";
import { projectsArray, updateStorage } from "./projects"

const taskFactory = (name, date, priority) => {
    return { name , date, priority}
}

const createTask = (projectIndex, name, date, priority) => {
    const newTask = taskFactory(name, date, priority);
    projectsArray[projectIndex].projectTasks.push(newTask);
    console.log(priority);
    updateStorage();
    console.log(projectsArray)
}

const removeTask = (projectIndex, taskIndex) => {
    projectsArray[projectIndex].projectTasks.splice(taskIndex, 1);
    renderProjectTasks(projectsArray[projectIndex], projectIndex);
    updateStorage();
    console.log(projectsArray)
}

const updateTask = (projectIndex, taskIndex, newName, newDate, newPrio) => {
    projectsArray[projectIndex].projectTasks[taskIndex].name = newName;
    projectsArray[projectIndex].projectTasks[taskIndex].date = newDate;
    projectsArray[projectIndex].projectTasks[taskIndex].priority = newPrio;
    renderProjectTasks(projectsArray[projectIndex], projectIndex);
    updateStorage();
    console.log(projectsArray)
}


export { taskFactory, createTask, removeTask, updateTask }
