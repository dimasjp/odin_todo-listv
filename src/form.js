import { createProject } from "./projects";

const modalContainer = document.querySelector('.modal-content');
const formField = document.querySelector('#modal-form');
const submitButton = document.querySelector('.btn-form-submit');

const createForm = () => {
    if (formField.classList.contains('project-form')) {
        createProjectForm();
    } else if (formField.classList.contains('task-form')) {
        createTaskForm();
    }
}

const createProjectForm = () => {
    formField.innerHTML = '';

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Add New Project";

    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.placeholder = "Project";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('name', 'title-input');

    formField.append(formTitle, titleInput);
}

const createTaskForm = () => {
    formField.innerHTML = '';

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Add New Task";

    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.placeholder = "Task";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('name', 'title-input');

    formField.append(formTitle, titleInput)
}

submitButton.addEventListener('click', () => {
    submitForm();
})


const submitForm = () => {
    if (formField.classList.contains('project-form')) {
        const titleInput = document.querySelector('.title-input');
        createProject(titleInput.value);
    }
}

export { createForm }