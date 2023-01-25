import { renderProjects } from "./display";
import { taskFactory } from "./tasks";

const projectFactory = (title) => {
    const projectTasks = [];

    return { title, projectTasks };
}

let projectsArray = [];

const createProject = (title) => {
    const newProject = projectFactory(title);
    projectsArray.push(newProject);
}

const removeProject = (index) => {
    projectsArray.splice(index, 1);
    renderProjects(projectsArray);
}

export { createProject, projectFactory, projectsArray, removeProject }


