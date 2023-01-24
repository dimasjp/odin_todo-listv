import { renderProjects } from "./display";
import { taskFactory } from "./tasks";

const projectFactory = (title) => {
    const projectTasks = [];

    return { title, projectTasks };
}

const projectsArray = [];

const createProject = (title) => {
    const newProject = projectFactory(title);
    projectsArray.push(newProject);
    console.log(projectsArray)
    renderProjects();
}

export { createProject, projectFactory, projectsArray }


