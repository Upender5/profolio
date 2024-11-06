import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/contacts';

// Fetch contact data
export const getContact = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    throw error;
  }
};

// Update contact data
export const editContact = async (id, contactData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/edit/${id}`, contactData);
    return response.data;
  } catch (error) {
    console.error("Error updating contact data:", error);
    throw error;
  }
};
