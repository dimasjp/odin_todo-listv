import { renderProjects } from './display';
import { createProject, projectsArray } from './projects';
import './style.css';
import { createTask, tasksList } from './tasks';

console.log(projectsArray)
createProject("B")
createProject("C")
createTask(1, "CC")
console.log(projectsArray)
renderProjects(projectsArray)

