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
    saveToStorage();
}

const removeProject = (index) => {
    projectsArray.splice(index, 1);
    renderProjects(projectsArray);
}

const saveToStorage = () => {
    let item = JSON.stringify(projectsArray);
    localStorage.setItem('projects', item);
}

const retrieveStorage = () => {
    if (localStorage.getItem('projects') === null) {
        createProject('Wow');
    } else {
        const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
        projectsArray = projectsFromStorage;
    }
}

export { createProject, projectFactory, projectsArray, removeProject, saveToStorage, retrieveStorage }


