import api from './api';

// Function to fetch the "About" information
export async function fetchAbout() {
    try {
        const response = await api.get('/about/get');
        return response.data;
    } catch (error) {
        console.error('Error fetching about information:', error);
    }
}

// Function to edit the "About" information by ID
export async function editAbout(id, updatedAbout) {
    try {
        const response = await api.post(`/about/edit/${id}`, updatedAbout);
        return response.data;
    } catch (error) {
        console.error('Error editing about information:', error);
    }
}
