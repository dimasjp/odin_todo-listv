import { projectsArray, removeProject } from "./projects";
import { openModal } from "./modal";
import { createEditForm, createProjectForm, createTaskDetail, createTaskForm } from "./modal";
import { removeTask } from "./tasks";
import element from "./create-element";

const openProjectModal = document.querySelector('.open-project-modal');
const form = document.querySelector('#modal-form');

openProjectModal.addEventListener('click', () => {
    openModal('project-form');
    createProjectForm();
})

const renderProjects = (projects) => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';

    projects.forEach((project, projectIndex, tasks) => {
        const projectCard = element.createDiv('project-card');
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

    const projectPageTitle = element.createPara('project-head-title');
    projectPageTitle.textContent = project.title;

    const addTaskButton = element.createButton('btn-task-add');
    addTaskButton.textContent = 'Add Task';

    projectPageHeader.append(projectPageTitle, addTaskButton);

    addTaskButton.addEventListener('click', () => {
        openModal();
        form.classList.add('task-form');
        createTaskForm(projectIndex)
    })

    const taskContainer = element.createDiv('task-container');
    main.appendChild(taskContainer);

    project.projectTasks.forEach((task, index) => {
        const taskCard = element.createDiv('task-card');
        taskContainer.appendChild(taskCard);

        const taskTitle = element.createPara('task-title');
        const taskDue = element.createPara('task-date');
        const taskPrio = element.createPara('task-prio');
        const taskDetailBtn = element.createButton('btn-task-detail');
        const taskEditBtn = element.createButton('btn-task-edit');
        const taskRemoveBtn = element.createButton('btn-task-remove');

        taskTitle.textContent = task.name;
        taskDue.textContent = task.date;
        taskPrio.textContent = task.priority;
        taskDetailBtn.textContent = 'Detail';
        taskEditBtn.textContent = 'Edit';
        taskRemoveBtn.textContent = 'X';

        taskCard.append(taskTitle, taskDue, taskPrio, taskDetailBtn, taskEditBtn, taskRemoveBtn)

        taskDetailBtn.addEventListener('click', () => {
            openModal();
            createTaskDetail(projectIndex, index);
        })

        taskEditBtn.addEventListener('click', () => {
            openModal();
            createEditForm(projectIndex, index);
        })

        taskRemoveBtn.addEventListener('click', () => {
            removeTask(projectIndex, index);
        })
    })
}

export { renderProjects, renderProjectTasks }