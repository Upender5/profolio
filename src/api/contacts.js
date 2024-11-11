import api from './api';

// Fetch contact data
export const getContact = async () => {
  try {
    const response = await api.get('/contacts/get');
    return response.data;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    throw error;
  }
};

// Update contact data
export const editContact = async (id, contactData) => {
  try {
    const response = await api.post(`/contacts/edit/${id}`, contactData);
    return response.data;
  } catch (error) {
    console.error("Error updating contact data:", error);
    throw error;
  }
};
