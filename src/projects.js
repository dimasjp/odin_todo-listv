import { renderProjects, renderProjectTasks } from "./display";
import { taskFactory } from "./tasks";

const projectFactory = (title) => {
    const projectTasks = [];

    return { title, projectTasks };
}

let projectsArray = [];

const createProject = (title) => {
    const newProject = projectFactory(title);
    projectsArray.push(newProject);
    updateStorage();
    console.log(projectsArray);
}

const removeProject = (index) => {
    projectsArray.splice(index, 1);
    renderProjects(projectsArray);
    updateStorage();
    console.log(projectsArray);
}

const updateStorage = () => {
    let item = JSON.stringify(projectsArray);
    localStorage.setItem('projects', item);
}

const retrieveStorage = () => {
    if (localStorage.getItem('projects') === null) {
        console.log('No projects found');
        console.log('Creating Wow project');
        createProject('Wow');
    } else {
        const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
        projectsArray = projectsFromStorage;
    }
}

export { createProject, projectFactory, projectsArray, removeProject, updateStorage, retrieveStorage }


