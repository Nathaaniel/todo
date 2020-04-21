import _ from 'lodash';
import {newProject} from "./newProject";
import {createTask} from "./createTask";
import { generateProjectList } from './generateProjectList';
import {populateProjects} from './populateProjects';
import {generateProjectTasks} from './generateProjectTasks';
import {populateTasks} from './populateTasks';

let projectArray = []
newProject("My Project", projectArray)
newProject("Double Test", projectArray)
createTask(projectArray, "My Project", "First Task", "tomorrow", "High", "Will this work", false)
createTask(projectArray, "My Project", "Second Task", "nigh", "Low", "Will thinighs work", false)
createTask(projectArray, "Double Test", "First in the second", "01/01/2029", "Urgent", "Double testy-westy", true)
console.log(projectArray)
console.log(generateProjectList(projectArray)) 
populateProjects(generateProjectList(projectArray), projectArray)
populateTasks(generateProjectTasks(projectArray, 0))