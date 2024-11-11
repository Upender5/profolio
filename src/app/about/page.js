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
    fullName: '',
    role: '',
    location: '',
    contact: '',
    email: '',
    socialMediaLinks: {
      linkedin: '',
      github: '',
      npm: ''
    },
    technicalSkills: {
      serverSideLanguages: [],
      database: [],
      sourceControl: [],
      operatingSystems: [],
      applicationFrameworks: [],
      caching: [],
      messageProtocol: []
    },
    workExperience: [],
    education: []
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAbout();

      if (data && data.length > 0) {
        const firstData = data[0];

        setAboutData(firstData);
        setFormData({
          fullName: firstData.fullName || '',
          role: firstData.role || '',
          location: firstData.location || '',
          contact: firstData.contact || '',
          email: firstData.email || '',
          socialMediaLinks: firstData.socialMediaLinks.reduce((acc, link) => {
            if (link.platform === 'linkedin') acc.linkedin = link.url;
            if (link.platform === 'github') acc.github = link.url;
            if (link.platform === 'npm') acc.npm = link.url;
            return acc;
          }, {}),
          technicalSkills: firstData.technicalSkills || {
            serverSideLanguages: [],
            database: [],
            sourceControl: [],
            operatingSystems: [],
            applicationFrameworks: [],
            caching: [],
            messageProtocol: []
          },
          workExperience: firstData.workExperience || [],
          education: firstData.education || []
        });
      }
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
      await editAbout(aboutData._id, formData);
      setAboutData(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to edit about data:', error);
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <h3>Role: {aboutData?.role}</h3>

      <p><strong>Location:</strong> {aboutData?.location}</p>
      <p><strong>Contact:</strong> {aboutData?.contact}</p>
      <p><strong>Email:</strong> {aboutData?.email}</p>

      <h4>Social Media</h4>
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

      <h4>Technical Skills</h4>
      {Object.entries(aboutData?.technicalSkills || {}).map(([skillCategory, skills]) => (
        <div key={skillCategory}>
          <strong>{skillCategory.replace(/([A-Z])/g, ' $1')}:</strong>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}

      <h4>Work Experience</h4>
      {aboutData?.workExperience?.map((experience, index) => (
        <div key={experience._id}>
          <strong>Company:</strong> {experience.companyName} <br />
          <strong>Role:</strong> {experience.role} <br />
          <strong>Date:</strong> {experience.date} <br />
          <strong>About Role:</strong> {experience.aboutRole}
        </div>
      ))}

      <h4>Education</h4>
      <ul>
        {aboutData?.education?.map((edu, index) => (
          <li key={index}>
            <strong>Degree:</strong> {edu.degree} <br />
            <strong>Institution Name:</strong> {edu.instituteName}branchName <br />
            <strong>Branch Name:</strong> {edu.branchName} <br />
            <strong>Location:</strong> {edu.location} <br />
            <strong>Percentage:</strong> {edu.percentage} <br />
            <strong>Year of Graduation:</strong> {edu.passoutYear}
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
