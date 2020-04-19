const createTask = (project_array, project_name, name="", dueDate="", priority="", description = "", done=false ) => {
    let index = project_array.findIndex(x => x.project_name = project_name)
    
    let new_task = {
        "name":name,
        "dueDate":dueDate,
        "priority":priority,
        "description":description,
        "done":done
    }

    project_array[index].tasks.push(new_task)
}

export {createTask}