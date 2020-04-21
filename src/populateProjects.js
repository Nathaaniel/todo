import {populateTasks} from './populateTasks';
import {generateProjectTasks} from './generateProjectTasks';

const populateProjects = (project_list, projectArray) => {
    let project_container = document.getElementsByClassName("project-container")[0]

    for (let i=0; i<project_list.length; i++) {
        const project = document.createElement('div');
        project.classList.add("project")
        project.innerHTML = project_list[i]

        
      
        project_container.appendChild(project)

        project.addEventListener("click", function() {populateTasks(generateProjectTasks(projectArray, i))})
    }
      
}

export {populateProjects}