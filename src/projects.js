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
    console.log(projectsArray)
    renderProjects();
}

const removeProject = (index) => {
    projectsArray.splice(index, 1);
    renderProjects();
}

export { createProject, projectFactory, projectsArray, removeProject }


