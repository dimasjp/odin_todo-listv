import { createProject, projectsArray } from './projects';
import './style.css';
import { createTask, tasksList } from './tasks';

console.log(projectsArray);

createTask("Forever", "22", "Prio");

console.log(projectsArray);
