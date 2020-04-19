const newProject = (project_name, projects_array) => {
    // Each project array is [name, [tasks]]
    let project_object = {
        "project_name": project_name,
        "tasks": []
    }
    projects_array.push(project_object)
    }

    export {newProject}