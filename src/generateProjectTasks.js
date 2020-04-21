const generateProjectTasks = (projects_array, project_index) => {
    let project = projects_array[project_index]
    let project_tasks_array = project.tasks
    let project_tasks_list = project_tasks_array.map(x => x.name)
    return project_tasks_list
}
export {generateProjectTasks}