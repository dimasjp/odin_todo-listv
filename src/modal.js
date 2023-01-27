import { createProject, projectsArray } from "./projects";
import { renderProjects, renderProjectTasks } from "./display";
import { createTask, updateTask } from "./tasks";
import element from "./create-element";

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.btn-close-modal');
const form = document.querySelector('#modal-form');

const openModal = (className) => {
    form.classList.add(className);
    modal.classList.remove('display-none');
}

document.addEventListener('click', (event) => {
    if (event.target === modal || event.target === closeButton) {
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
    form.innerHTML = '';

    const formTitle = element.createPara('form-title');
    const titleInput = element.createInput('text', 'title');
    const submitButton = element.createButton('btn-submit-form');

    formTitle.textContent = 'Add New Project';
    submitButton.textContent = 'Submit';

    form.append(formTitle, titleInput, submitButton);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        createProject(titleInput.value);
        renderProjects(projectsArray);
        closeModal();
    })
}

const createTaskForm = (projectIndex) => {
    form.innerHTML = '';

    const formTitle = element.createPara('form-title');
    const titleInput = element.createInput('text', 'title');
    const dateInput = element.createInput('date', 'date');
    const prioInputL = element.createInput('radio', 'prio');
    const prioInputH = element.createInput('radio', 'prio');
    const submitButton = element.createButton('btn-submit-form');

    formTitle.textContent = 'Add New Task';
    prioInputL.setAttribute('value', 'low');
    prioInputH.setAttribute('value', 'high');
    submitButton.textContent = 'Submit';

    form.append(formTitle, titleInput, dateInput, prioInputL, prioInputH, submitButton);

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

const createTaskDetail = (projectIndex, taskIndex) => {
    form.innerHTML = '';
 
    const taskTitle = element.createPara('detail-task-title');
    const taskDue = element.createPara('detail-task-date');
    const taskPrio = element.createPara('detail-task-prio');

    taskTitle.textContent = projectsArray[projectIndex].projectTasks[taskIndex].name;
    taskDue.textContent = projectsArray[projectIndex].projectTasks[taskIndex].date;
    taskPrio.textContent = projectsArray[projectIndex].projectTasks[taskIndex].priority;

    form.append(taskTitle, taskDue, taskPrio);
}

const createEditForm = (projectIndex, index) => {
    form.innerHTML = '';

    const formTitle = element.createPara('form-title');
    const titleInput = element.createInput('text', 'title');
    const dateInput = element.createInput('date', 'date');
    const prioInputL = element.createInput('radio', 'prio');
    const prioInputH = element.createInput('radio', 'prio');
    const submitButton = element.createButton('btn-submit-form');

    formTitle.textContent = 'Edit Task';
    prioInputL.setAttribute('value', 'low');
    prioInputH.setAttribute('value', 'high');
    submitButton.textContent = 'Edit';

    form.append(formTitle, titleInput, dateInput, prioInputL, prioInputH, submitButton);

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

export {openModal, closeModal, createProjectForm, createTaskForm, createTaskDetail, createEditForm}