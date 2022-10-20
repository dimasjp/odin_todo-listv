import { projectsArray } from "./projects";


const createProjectCard = (project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
}

const renderProjects = (project) => {
    const projectContainer = document.querySelector('#project-container');
    const projectCard = createProjectCard(project);
    projectContainer.appendChild(projectCard);
}

const renderPage = () => {
    renderProjects();
}

export { createProjectCard, renderProjects, renderPage }