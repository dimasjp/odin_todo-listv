import { closeModal } from "./modal";
import { createProject, projectsArray } from "./projects";
import { renderProjects, renderProjectTasks } from "./display";
import { createTask, updateTask } from "./tasks";

const modalContainer = document.querySelector('.modal-content');
const formField = document.querySelector('#modal-form');

const createProjectForm = () => {
    formField.innerHTML = '';
    formField.classList.add('project-form');

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

    formField.append(formTitle, titleInput, submitButton);
  
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        createProject(titleInput.value);
        console.log(projectsArray);
        renderProjects(projectsArray);
        submitButton.classList.remove('submit-project');
        formField.reset();
        closeModal();
    })
}

const createTaskForm = (projectIndex) => {
    formField.innerHTML = '';
    formField.classList.add('task-form');

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

    formField.append(formTitle, titleInput, dateInput, prioInput, prioInputW, submitButton);

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
        formField.reset();
        closeModal();
    })
}

const createTaskDetail = (projectIndex, taskIndex) => {
    formField.innerHTML = '';
    formField.classList.add('task-detail');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('detail-task-title');
    taskTitle.textContent = projectsArray[projectIndex].projectTasks[taskIndex].name;

    const taskDue = document.createElement('div');
    taskDue.classList.add('detail-task-date');
    taskDue.textContent = projectsArray[projectIndex].projectTasks[taskIndex].date;

    const taskPrio = document.createElement('div');
    taskPrio.classList.add('detail-task-prio');
    taskPrio.textContent = projectsArray[projectIndex].projectTasks[taskIndex].priority;

    formField.append(taskTitle, taskDue, taskPrio);
}

const createEditForm = (projectIndex, index) => {
    formField.innerHTML = '';
    formField.classList.add('edit-form');

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

    formField.append(formTitle, titleInput, dateInput, prioInput, prioInputW, submitButton);

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
        formField.reset();
        closeModal();
    })
}


export { createProjectForm, createTaskForm, createTaskDetail, createEditForm }