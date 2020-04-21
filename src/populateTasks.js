const populateTasks = (project_tasks_list) => {
    let task_container = document.getElementsByClassName("tasks-container")[0]
    while (task_container.firstChild) {
        task_container.removeChild(task_container.lastChild);
      }

    for (let i=0; i<project_tasks_list.length; i++) {
        const task = document.createElement('div');
        task.classList.add("task")
        task.innerHTML = project_tasks_list[i]

              
        task_container.appendChild(task)
    }
      
}

export {populateTasks}