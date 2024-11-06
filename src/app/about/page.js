'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/ProfileSection.module.css';
import { FaLinkedin, FaGithub, FaNpm } from 'react-icons/fa';
import { fetchAbout, editAbout } from '../../api/about';

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    position: '',
    socialMedia: {
      linkedin: '',
      github: '',
      npm: ''
    },
    professionalJourney: '',
    technicalSkills: [],
    workExperience: [],
    education: []
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAbout();
      console.log(data,"data");
      
      setAboutData(data);
      setFormData(data); // Initialize form with fetched data
    };

    getData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await editAbout(aboutData.id, formData);
      setAboutData(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to edit about data:', error);
    }
  };

  return (
    <div>
      <Header />
      <h3>Associate Backend Developer</h3>

      <h4>Social Media</h4>
      <ul>
        <li>
          <a href={aboutData?.socialMedia?.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li>
          <a href={aboutData?.socialMedia?.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </li>
        <li>
          <a href={aboutData?.socialMedia?.npm} target="_blank" rel="noopener noreferrer">
            <FaNpm /> npm
          </a>
        </li>
      </ul>

      <h4>Professional Journey</h4>
      {isEditing ? (
        <textarea
          name="professionalJourney"
          value={formData.professionalJourney}
          onChange={handleInputChange}
        />
      ) : (
        <p>{aboutData?.professionalJourney}</p>
      )}

      <h4>Technical Skills</h4>
      {isEditing ? (
        <textarea
          name="technicalSkills"
          value={formData.technicalSkills.join(', ')}
          onChange={(e) => setFormData((prev) => ({
            ...prev,
            technicalSkills: e.target.value.split(', ')
          }))}
        />
      ) : (
        <ul>
          {aboutData?.technicalSkills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}

      <h4>Work Experience</h4>
      {aboutData?.workExperience?.map((experience, index) => (
        <div key={index}>
          <strong>Position:</strong> {experience.position} - {experience.company} <br />
          <strong>Duration:</strong> {experience.duration} <br />
          <strong>Company Website:</strong>
          <a href={experience.website} target="_blank" rel="noopener noreferrer">
            Visit {experience.company}
          </a><br />
          <strong>Description:</strong> {experience.description}
        </div>
      ))}

      <h4>Education</h4>
      <ul>
        {aboutData?.education?.map((edu, index) => (
          <li key={index}>
            <strong>Degree:</strong> {edu.degree} <br />
            <strong>Institution:</strong> {edu.institution} <br />
            <strong>Year of Graduation:</strong> {edu.graduationYear}
          </li>
        ))}
      </ul>

      <button onClick={handleEditToggle}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      {isEditing && (
        <button onClick={handleSubmit}>Save Changes</button>
      )}

      <Footer />
    </div>
  );
}
