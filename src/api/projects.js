import api from './api';

// Fetch all projects
export async function fetchProjects() {
    try {
        const response = await api.get('/projects/get');
        
        const { personalProjects, professionalProjects, collegeProjects } = response.data;
        
        return { personalProjects, professionalProjects, collegeProjects };
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}

// Add a new project
export async function addProject(newProject) {
  try {
    const response = await api.post('/projects/add', newProject);
    return response.data;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
}

// Edit an existing project by ID
export async function editProject(id, updatedProject) {
  try {
    const response = await api.put(`/projects/edit/${id}`, updatedProject);
    return response.data;
  } catch (error) {
    console.error('Error editing project:', error);
    throw error;
  }
}
