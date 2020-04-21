const toggleDone = (project_array, project_name, name) => {
    let project_index = project_array.findIndex(x => x.project_name == project_name) 
    //Find project in project_array
    let task_index = project_array[project_index].tasks.findIndex(x => x == name)
    
    
    }
}
