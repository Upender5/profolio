import api from './api';

export async function fetchBlogs() {
    try {
        const response = await api.get('/blogs/get');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

export async function addBlogs(newBlog) {
    try {
        const response = await api.post('/blogs/add', newBlog);
        return response.data;
    } catch (error) {
        console.error('Error adding project:', error);
    }
}

export async function editBlogs(id, updatedBlog) {
    try {
        const response = await api.put(`/blogs/edit/${id}`, updatedBlog);
        return response.data;
    } catch (error) {
        console.error('Error editing project:', error);
    }
}
