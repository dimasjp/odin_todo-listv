import { projectsArray, removeProject } from "./projects";
import { openModal } from "./modal";
import { createForm } from "./form";

const openProjectModal = document.querySelector('.open-project-modal');
const form = document.querySelector('#modal-form');

openProjectModal.addEventListener('click', () => {
    openModal();
    form.classList.add('project-form');
    console.log("Open Modal")
    createForm();
})

const renderProjects = () => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';

    projectsArray.forEach((project, index, tasks) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectContainer.appendChild(projectCard);

        const projectCardTitle = document.createElement('p');
        projectCardTitle.classList.add('project-title');
        projectCardTitle.textContent = project.title;
        projectCard.appendChild(projectCardTitle);

        const projectRemoveButton = document.createElement('button');
        projectRemoveButton.classList.add('project-remove-btn');
        projectRemoveButton.textContent = 'X';
        projectCard.appendChild(projectRemoveButton);

        projectRemoveButton.addEventListener('click', () => {
            removeProject(index);
        })
    })
}

const renderProjectTasks = () => {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';

}

export { renderProjects }