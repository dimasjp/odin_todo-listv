import { projectsArray, removeProject } from "./projects";
import { openModal } from "./modal";
import { createEditForm, createProjectForm, createTaskForm } from "./modal";
import { removeTask } from "./tasks";
import element from "./create-element";

const openProjectModal = document.querySelector('.open-project-modal');
const main = document.querySelector('.main');

openProjectModal.addEventListener('click', () => {
    openModal('project-form');
    createProjectForm();
})

const renderProjects = (projects) => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';

    projects.forEach((project, projectIndex, tasks) => {
        const projectCard = element.createLi('project-card');
        projectContainer.appendChild(projectCard);

        projectCard.addEventListener('click', () => {
            renderProjectTasks(project, projectIndex);
        })

        const projectCardTitle = element.createPara('project-title');
        projectCardTitle.textContent = project.title;

        const projectRemoveButton = element.createButton('btn-project-remove');
        projectRemoveButton.textContent = 'X';

        projectCard.append(projectCardTitle, projectRemoveButton);

        projectRemoveButton.addEventListener('click', () => {
            removeProject(projectIndex);
        })
    })
}

const renderProjectTasks = (project, projectIndex) => {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    const projectPageHeader = element.createDiv('project-head');
    main.appendChild(projectPageHeader);

    const projectPageTitle = element.createH1('project-head-title');
    projectPageTitle.textContent = project.title;

    const addTaskButton = element.createButton('btn-task-add');
    addTaskButton.textContent = 'Add Task';

    projectPageHeader.append(projectPageTitle, addTaskButton);

    addTaskButton.addEventListener('click', () => {
        openModal('task-form');
        createTaskForm(projectIndex)
    })

    const taskContainer = element.createDiv('task-container');
    main.appendChild(taskContainer);

    project.projectTasks.forEach((task, index) => {
        const taskCard = element.createDiv('task-card');
        taskContainer.appendChild(taskCard);

        const cardLeft = element.createDiv('task-card-left');
        const cardRight = element.createDiv('task-card-right');
        taskCard.append(cardLeft, cardRight);

        const taskTitle = element.createPara('task-title');
        const taskDue = element.createPara('task-date');
        const taskPrio = element.createPara('task-prio');
        const taskEditBtn = element.createButton('btn-task-edit');
        const taskRemoveBtn = element.createButton('btn-task-remove');

        taskTitle.textContent = task.name;
        taskDue.textContent = task.date;
        taskPrio.textContent = task.priority;
        taskEditBtn.textContent = 'Edit';
        taskRemoveBtn.textContent = 'X';

        cardLeft.append(taskTitle, taskDue, taskPrio)
        cardRight.append(taskEditBtn, taskRemoveBtn);

        taskEditBtn.addEventListener('click', () => {
            openModal('task-edit');
            createEditForm(projectIndex, index);
        })

        taskRemoveBtn.addEventListener('click', () => {
            removeTask(projectIndex, index);
        })
    })
}

export { renderProjects, renderProjectTasks }