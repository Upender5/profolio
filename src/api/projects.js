import api from './api';

export async function fetchProjects() {
    try {
        const response = await api.get('/projects/get');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

export async function addProject(newProject) {
    try {
        const response = await api.post('/projects/add', newProject);
        return response.data;
    } catch (error) {
        console.error('Error adding project:', error);
    }
}

export async function editProject(id, updatedProject) {
    try {
        const response = await api.put(`/projects/edit/${id}`, updatedProject);
        return response.data;
    } catch (error) {
        console.error('Error editing project:', error);
    }
}
