import { projectsArray } from "./projects";
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