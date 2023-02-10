import { createProject, projectsArray } from "./projects";
import { renderProjects, renderProjectTasks } from "./display";
import { createTask, updateTask } from "./tasks";
import element from "./create-element";

const modal = document.querySelector('.modal');
const form = document.querySelector('#modal-form');
const formHead = document.querySelector('.form-head');

const openModal = (className) => {
    form.classList.add(className);
    modal.classList.remove('display-none');
}

document.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('btn-close-form')) {
        closeModal();
    }
})

const closeModal = () => {
    form.reset();
    form.removeAttribute('class');
    modal.classList.add('display-none')
    form.innerHTML = '';
}

const createProjectForm = () => {
    formHead.innerHTML = '';

    const formTitle = element.createH1('form-title');
    formHead.appendChild(formTitle);

    const titleInput = element.createInput('text', 'title');
    const closeButton = element.createButton('btn-close-form');
    const submitButton = element.createButton('btn-submit-form');

    formTitle.textContent = 'Add New Project';
    closeButton.textContent = 'Cancel';
    submitButton.textContent = 'Submit';

    form.append(titleInput, closeButton, submitButton);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        createProject(titleInput.value);
        renderProjects(projectsArray);
        closeModal();
    })
}

const createTaskForm = (projectIndex) => {
    formHead.innerHTML = '';

    const formTitle = element.createH1('form-title');
    formHead.appendChild(formTitle);

    const titleInput = element.createInput('text', 'title');
    const dateInput = element.createInput('date', 'date');
    const prioInputL = element.createInput('radio', 'prio');
    const prioInputH = element.createInput('radio', 'prio');
    const closeButton = element.createButton('btn-close-form');
    const submitButton = element.createButton('btn-submit-form');

    formTitle.textContent = 'Add New Task';
    prioInputL.setAttribute('value', 'low');
    prioInputH.setAttribute('value', 'high');
    closeButton.textContent = 'Cancel';
    submitButton.textContent = 'Submit';

    form.append(titleInput, dateInput, prioInputL, prioInputH, closeButton, submitButton);

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
        closeModal();
    })
}

const createEditForm = (projectIndex, index) => {
    formHead.innerHTML = '';

    const formTitle = element.createH1('form-title');
    formHead.appendChild(formTitle);

    const titleInput = element.createInput('text', 'title');
    const dateInput = element.createInput('date', 'date');
    const prioInputL = element.createInput('radio', 'prio');
    const prioInputH = element.createInput('radio', 'prio');
    const closeButton = element.createButton('btn-close-form');
    const submitButton = element.createButton('btn-submit-form');

    formTitle.textContent = 'Edit Task';
    prioInputL.setAttribute('value', 'low');
    prioInputH.setAttribute('value', 'high');
    closeButton.textContent = 'Cancel';
    submitButton.textContent = 'Edit';

    form.append(titleInput, dateInput, prioInputL, prioInputH, closeButton, submitButton);

    titleInput.value = projectsArray[projectIndex].projectTasks[index].name;
    dateInput.value = projectsArray[projectIndex].projectTasks[index].date;

    const radioInput = document.querySelectorAll('input[name="prio-input"]');

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
        closeModal();
    })
}

export {openModal, closeModal, createProjectForm, createTaskForm, createEditForm}