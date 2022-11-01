import { projectsArray } from "./projects";

const renderProjects = () => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';

    projectsArray.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectContainer.appendChild(projectCard);

        const projectCardTitle = document.createElement('p');
        projectCardTitle.classList.add('project-title');
        projectCardTitle.textContent = project.title;
        projectCard.appendChild(projectCardTitle);
    })
}

const renderProjectTasks = () => {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';

}

export { renderProjects }