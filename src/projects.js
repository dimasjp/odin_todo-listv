import { createProjectCard, renderProjects } from "./display";

let projectsArray = [];

const projectFactory = (id, title, tasks) => {
    return { id, title, tasks }
}

const createProject = () => {
    const newProject = projectFactory(projectid, projectName);
    projectsArray.push(newProject);
    renderProjects(newProject);
}

export { projectsArray }


