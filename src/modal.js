import { createProject, projectsArray } from "./projects";
import { renderProjects, renderProjectTasks } from "./display";
import { createTask, updateTask } from "./tasks";

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.btn-close-modal');
const form = document.querySelector('#modal-form');

const openModal = () => {
    modal.classList.remove('display-none');
    
}

document.addEventListener('click', (event) => {
    if (event.target === modal || event.target === closeButton) {
        closeModal();
    }
})

const closeModal = () => {
    form.classList.remove('project-form');
    form.classList.remove('task-form');
    form.classList.remove('task-detail');
    form.classList.remove('edit-form');
    form.reset();
    modal.classList.add('display-none')
    form.innerHTML = '';
}

const createProjectForm = () => {
    form.innerHTML = '';
    form.classList.add('project-form');

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Add New Project";

    const titleInput = document.createElement('input');
    titleInput.placeholder = "Project";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('name', 'title-input');

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn-submit-form');
    submitButton.classList.add('submit-project');
    submitButton.textContent = "Submit";

    form.append(formTitle, titleInput, submitButton);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        createProject(titleInput.value);
        renderProjects(projectsArray);
        submitButton.classList.remove('submit-project');
        form.reset();
        closeModal();
    })
}

const createTaskForm = (projectIndex) => {
    form.innerHTML = '';
    form.classList.add('task-form');

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Add New Task";

    const titleInput = document.createElement('input');
    titleInput.placeholder = "Task";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('name', 'title-input');

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date-input');
    dateInput.setAttribute('name', 'date-input');

    const prioInput = document.createElement('input')
    prioInput.setAttribute('type', 'radio');
    prioInput.setAttribute('id', 'prio-low');
    prioInput.setAttribute('name', 'prio-input');
    prioInput.setAttribute('value', 'low');

    const prioInputW = document.createElement('input')
    prioInputW.setAttribute('type', 'radio');
    prioInputW.setAttribute('id', 'prio-high');
    prioInputW.setAttribute('name', 'prio-input');
    prioInputW.setAttribute('value', 'high');

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn-submit-form');
    submitButton.classList.add('submit-task');
    submitButton.textContent = "Submit";

    form.append(formTitle, titleInput, dateInput, prioInput, prioInputW, submitButton);

    const radioInput = document.querySelectorAll('input[name="prio-input"]');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let prio;
        radioInput.forEach((a) => {
            if (a.checked === true) {
                prio = a.value;
            }
        })
        createTask(projectIndex, titleInput.value, dateInput.value, prio);
        renderProjectTasks(projectsArray[projectIndex], projectIndex);
        submitButton.classList.remove('submit-task');
        form.reset();
        closeModal();
    })
}

const createTaskDetail = (projectIndex, taskIndex) => {
    form.innerHTML = '';
    form.classList.add('task-detail');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('detail-task-title');
    taskTitle.textContent = projectsArray[projectIndex].projectTasks[taskIndex].name;

    const taskDue = document.createElement('div');
    taskDue.classList.add('detail-task-date');
    taskDue.textContent = projectsArray[projectIndex].projectTasks[taskIndex].date;

    const taskPrio = document.createElement('div');
    taskPrio.classList.add('detail-task-prio');
    taskPrio.textContent = projectsArray[projectIndex].projectTasks[taskIndex].priority;

    form.append(taskTitle, taskDue, taskPrio);
}

const createEditForm = (projectIndex, index) => {
    form.innerHTML = '';
    form.classList.add('edit-form');

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Edit Task";

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'edit-title');
    titleInput.setAttribute('name', 'edit-title');

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'edit-date');
    dateInput.setAttribute('name', 'edit-date');

    const prioInput = document.createElement('input')
    prioInput.setAttribute('type', 'radio');
    prioInput.setAttribute('id', 'prio-low');
    prioInput.setAttribute('name', 'edit-prio');
    prioInput.setAttribute('value', 'low');

    const prioInputW = document.createElement('input')
    prioInputW.setAttribute('type', 'radio');
    prioInputW.setAttribute('id', 'prio-high');
    prioInputW.setAttribute('name', 'edit-prio');
    prioInputW.setAttribute('value', 'high');

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn-submit-form');
    submitButton.classList.add('submit-edit');
    submitButton.textContent = "Edit";

    form.append(formTitle, titleInput, dateInput, prioInput, prioInputW, submitButton);

    titleInput.value = projectsArray[projectIndex].projectTasks[index].name;
    dateInput.value = projectsArray[projectIndex].projectTasks[index].date;

    const radioInput = document.querySelectorAll('input[name="edit-prio"]');

    radioInput.forEach((a) => {
        if (a.value === projectsArray[projectIndex].projectTasks[index].priority) {
            a.checked = true;
        }
    })

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let prio;
        radioInput.forEach((a) => {
            if (a.checked === true) {
                prio = a.value;
            }
        })
        updateTask(projectIndex, index, titleInput.value, dateInput.value, prio)
        submitButton.classList.remove('submit-edit');
        form.reset();
        closeModal();
    })
}

export {openModal, closeModal, createProjectForm, createTaskForm, createTaskDetail, createEditForm}