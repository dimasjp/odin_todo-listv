import { taskFactory } from "./tasks";
import { projectsArray } from "./TodoList";

const projectFactory = (title) => {
    const projectTasks = [];
    
    const addProjectTasks = (task) => {
        projectTasks.push(task);
    }

    return { title, projectTasks, addProjectTasks };
}

const createProject = (id, title) => {
    const newProject = projectFactory(id, title);
    projectsArray.push(newProject);
}

export { createProject, projectFactory }


