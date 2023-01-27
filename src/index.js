import { renderProjects } from './display';
import { createProject, projectsArray, retrieveStorage } from './projects';
import './style.css';
import { createTask, tasksList } from './tasks';

retrieveStorage();
console.log(projectsArray);
renderProjects(projectsArray);
