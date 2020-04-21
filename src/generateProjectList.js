const generateProjectList = (projects_array) => {
    let project_list = projects_array.map(x => x.project_name)
    return project_list
}
export {generateProjectList}