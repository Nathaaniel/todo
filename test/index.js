// // CONCATENATED MODULE: ./src/newProject.js
// const newProject = (project_name, projects_array) => {
//     // Each project array is [name, [tasks]]
//     let project_object = {
//         "project_name": project_name,
//         "tasks": []
//     }
//     projects_array.push(project_object)
//     }

    
// // CONCATENATED MODULE: ./src/createTask.js
// const createTask = (project_array, project_name, name="", dueDate="", priority="", description = "", done=false ) => {
//     let index = project_array.findIndex(x => x.project_name == project_name)
//     console.log(index)
//     let new_task = {
//         "name":name,
//         "dueDate":dueDate,
//         "priority":priority,
//         "description":description,
//         "done":done
//     }
// console.log(JSON.stringify(project_array))
//     project_array[index].tasks.push(new_task)
//     console.log(JSON.stringify(project_array))
// }


// // CONCATENATED MODULE: ./src/index.js




// let projectArray = []
// newProject("My Project", projectArray)
// newProject("Double Test", projectArray)
// createTask(projectArray, "My Project", "First Task", "tomorrow", "High", "Will this work", false)
// createTask(projectArray, "My Project", "Second Task", "nigh", "Low", "Will thinighs work", false)
// createTask(projectArray, "Double Test", "First in the second", "01/01/2029", "Urgent", "Double testy-westy", true)


// function component() {
//     const element = document.createElement('div');
  
//     element.innerHTML = JSON.stringify(projectArray);
  
//     return element;
//   }
  
//   document.body.appendChild(component());
