import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getContact, editContact } from '../../api/contact';

export default function ContactPage() {
  const [contact, setContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ phone: '', email: '', location: '', linkedin: '', github: '', npm: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContact();
        setContact(data);
        setFormData(data);  // Set initial form data
      } catch (error) {
        console.error("Failed to fetch contact data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editContact(contact._id, formData);  
      setContact(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update contact data:", error);
    }
  };

  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email or connect on social media!</p>

      {isEditing ? (
        // Edit Form
        <form onSubmit={handleSubmit}>
          <h4>Edit Contact Information</h4>
          <label>
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          </label>
          <h4>Edit Social Media Links</h4>
          <label>
            LinkedIn:
            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} required />
          </label>
          <label>
            GitHub:
            <input type="url" name="github" value={formData.github} onChange={handleChange} required />
          </label>
          <label>
            npm Profile:
            <input type="url" name="npm" value={formData.npm} onChange={handleChange} required />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={handleEditToggle}>Cancel</button>
        </form>
      ) : (
        // Display Contact Information
        <>
          {contact ? (
            <>
              <h4>Contact Information</h4>
              <ul>
                <li>Phone: {contact.phone}</li>
                <li>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li>Location: {contact.location}</li>
              </ul>

              <h4>Connect on Social Media</h4>
              <ul>
                <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href={contact.npm} target="_blank" rel="noopener noreferrer">npm Profile</a></li>
              </ul>
              <button onClick={handleEditToggle}>Edit Contact Info</button>
            </>
          ) : (
            <p>Loading contact information...</p>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}
