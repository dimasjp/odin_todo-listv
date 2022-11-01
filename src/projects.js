import { renderProjectNav } from "./display";
import { taskFactory } from "./tasks";

const projectFactory = (title) => {
    const projectTasks = [];
    
    function addTask(task) {
        projectTasks.push(task);
    }

    return { title, projectTasks, addTask };
}

const addTaskToProject = (task) => {
    projectsArray.forEach((project) => {
        project.addTask(task);
    })
}

const projectsArray = [];

const createProject = (title) => {
    const newProject = projectFactory(title);
    projectsArray.push(newProject);
    renderProjectNav();
}

createProject("Arctic");
createProject("Offer");
createProject("Cars");


export { createProject, projectFactory, projectsArray, addTaskToProject }


