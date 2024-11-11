'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaLinkedin, FaGithub, FaNpm } from 'react-icons/fa';
import { getContact, editContact } from '../../api/contacts.js';

export default function ContactPage() {
  const [contact, setContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    contact: '',
    email: '',
    location: '',
    socialMediaLinks: {
      linkedin: '',
      github: '',
      npm: ''
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContact();
        setContact(data);
        setFormData({
          contact: data.contact || '',
          email: data.email || '',
          location: data.location || '',
          socialMediaLinks: data.socialMediaLinks.reduce((acc, link) => {
            if (link.platform === 'LinkedIn') acc.linkedin = link.url;
            if (link.platform === 'GitHub') acc.github = link.url;
            if (link.platform === 'npm') acc.npm = link.url;
            return acc;
          }, {}),
        });
      } catch (error) {
        console.error("Failed to fetch contact data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("socialMediaLinks.")) {
      const platform = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        socialMediaLinks: {
          ...prevData.socialMediaLinks,
          [platform]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
        <form onSubmit={handleSubmit}>
          <h4>Edit Contact Information</h4>
          <label>
            Contact:
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          </label>
          <h4>Social Media</h4>
          <label>
            LinkedIn:
            <input type="url" name="socialMediaLinks.linkedin" value={formData.socialMediaLinks.linkedin} onChange={handleChange} />
          </label>
          <label>
            GitHub:
            <input type="url" name="socialMediaLinks.github" value={formData.socialMediaLinks.github} onChange={handleChange} />
          </label>
          <label>
            npm:
            <input type="url" name="socialMediaLinks.npm" value={formData.socialMediaLinks.npm} onChange={handleChange} />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={handleEditToggle}>Cancel</button>
        </form>
      ) : (
        <>
          {contact ? (
            <>
              <h4>Contact Information</h4>
              <ul>
                <li>Phone: {contact.contact}</li>
                <li>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li>Location: {contact.location}</li>
              </ul>

              <h4>Connect on Social Media</h4>
              <ul>
                <li>
                  <a href={formData.socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={formData.socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </li>
                <li>
                  <a href={formData.socialMediaLinks.npm} target="_blank" rel="noopener noreferrer">
                    <FaNpm /> npm
                  </a>
                </li>
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
