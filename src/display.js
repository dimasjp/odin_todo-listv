import { projectsArray, removeProject } from "./projects";
import { openModal } from "./modal";
import { createProjectForm, createTaskForm } from "./form";

const openProjectModal = document.querySelector('.open-project-modal');
const form = document.querySelector('#modal-form');

openProjectModal.addEventListener('click', () => {
    openModal();
    form.classList.add('project-form');
    createProjectForm();
})

const renderProjects = (projects) => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';

    projects.forEach((project, projectIndex, tasks) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectContainer.appendChild(projectCard);

        projectCard.addEventListener('click', () => {
            renderProjectTasks(project, projectIndex);
        })

        const projectCardTitle = document.createElement('p');
        projectCardTitle.classList.add('project-title');
        projectCardTitle.textContent = project.title;
        projectCard.appendChild(projectCardTitle);

        const projectRemoveButton = document.createElement('button');
        projectRemoveButton.classList.add('project-remove-btn');
        projectRemoveButton.textContent = 'X';
        projectCard.appendChild(projectRemoveButton);

        projectRemoveButton.addEventListener('click', () => {
            removeProject(projectIndex);
        })
    })
}

const renderProjectTasks = (project, projectIndex) => {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    const projectPageHeader = document.createElement('div');
    main.appendChild(projectPageHeader);

    const projectPageTitle = document.createElement('div');
    projectPageTitle.textContent = project.title;
    projectPageHeader.appendChild(projectPageTitle);

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    projectPageHeader.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', () => {
        openModal();
        form.classList.add('task-form');
        createTaskForm(projectIndex)
    })

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    main.appendChild(taskContainer);

    project.projectTasks.forEach((task, index) => {
        const taskCard = document.createElement('div');
        taskContainer.appendChild(taskCard);

        const taskTitle = document.createElement('div');
        taskTitle.textContent = task.name;
        taskCard.appendChild(taskTitle);
    })
}

export { renderProjects, renderProjectTasks }