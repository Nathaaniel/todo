import _ from 'lodash';
import {newProject} from "./newProject";
import {createTask} from "./createTask";

var projectArray = []
newProject("My Project", projectArray)
createTask(projectArray, "My Project", "First Task", "tomorrow", "High", "Will this work", false)


function component() {
    const element = document.createElement('div');
  

    element.innerHTML = JSON.stringify(projectArray);
  
    return element;
  }
  
  document.body.appendChild(component());