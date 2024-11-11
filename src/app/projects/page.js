'use client';

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fetchProjects, addProject, editProject } from '../../api/projects';

export default function ProjectsPage() {
    const [professionalProjects, setProfessionalProjects] = useState([]);
    const [personalProjects, setPersonalProjects] = useState([]);
    const [collegeProjects, setCollegeProjects] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        client: '',
        communicationProtocols: '',
        database: '',
        backend: '',
        frontend: '',
        projectDescription: '',
        keyFeatures: [],
        useCases: []
    });

    useEffect(() => {
        async function loadProjects() {
            try {
                const { professionalProjects = [], personalProjects = [], collegeProjects = [] } = await fetchProjects();
                
                setProfessionalProjects(professionalProjects, collegeProjects);
                setPersonalProjects(personalProjects);
                setCollegeProjects(collegeProjects);
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        }

        loadProjects();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddToggle = () => {
        setIsAdding(!isAdding);
        setFormData({});
    };

    const handleEditToggle = (project) => {
        setIsEditing(project._id);
        setFormData(project);
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        const newProject = await addProject(formData);
        setProfessionalProjects([...professionalProjects, newProject]);
        handleAddToggle();
    };

    const handleEditProject = async (e) => {
        e.preventDefault();
        const updatedProject = await editProject(isEditing, formData);
        setProfessionalProjects(professionalProjects.map(project => 
            project._id === isEditing ? updatedProject : project
        ));
        setIsEditing(null);
    };

    return (
        <div>
            <Header />
            <h1>My Projects</h1>
            <p>Here are some of the projects I have worked on:</p>

            {isAdding && (
                <div>
                    <h2>Add New Project</h2>
                    <form onSubmit={handleAddProject}>
                        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} required />
                        <input type="text" name="client" placeholder="Client" value={formData.client} onChange={handleInputChange} />
                        <input type="text" name="communicationProtocols" placeholder="Communication Protocols" value={formData.communicationProtocols} onChange={handleInputChange} />
                        <input type="text" name="database" placeholder="Database" value={formData.database} onChange={handleInputChange} />
                        <input type="text" name="backend" placeholder="Backend" value={formData.backend} onChange={handleInputChange} />
                        <input type="text" name="frontend" placeholder="Frontend" value={formData.frontend} onChange={handleInputChange} />
                        <textarea name="projectDescription" placeholder="Project Description" value={formData.projectDescription} onChange={handleInputChange}></textarea>
                        <button type="submit">Add Project</button>
                    </form>
                </div>
            )}

            {isEditing && (
                <div>
                    <h2>Edit Project</h2>
                    <form onSubmit={handleEditProject}>
                        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} required />
                        <input type="text" name="client" placeholder="Client" value={formData.client} onChange={handleInputChange} />
                        <input type="text" name="communicationProtocols" placeholder="Communication Protocols" value={formData.communicationProtocols} onChange={handleInputChange} />
                        <input type="text" name="database" placeholder="Database" value={formData.database} onChange={handleInputChange} />
                        <input type="text" name="backend" placeholder="Backend" value={formData.backend} onChange={handleInputChange} />
                        <input type="text" name="frontend" placeholder="Frontend" value={formData.frontend} onChange={handleInputChange} />
                        <textarea name="projectDescription" placeholder="Project Description" value={formData.projectDescription} onChange={handleInputChange}></textarea>
                        <button type="submit">Update Project</button>
                        <button type="button" onClick={() => setIsEditing(null)}>Cancel</button>
                    </form>
                </div>
            )}

            <button onClick={handleAddToggle}>{isAdding ? "Cancel" : "Add New Project"}</button>

            <div className="project-list">
                <h2>Professional Projects</h2>
                {professionalProjects.length > 0 ? (
                    professionalProjects.map((project, index) => (
                        <div key={index}>
                            <h3>{index + 1}. {project.title}</h3>
                            <p><strong>Client:</strong> {project.client}</p>
                            <p><strong>Communication Protocols:</strong> {project.communicationProtocols}</p>
                            <p><strong>Database:</strong> {project.database}</p>
                            <p><strong>Backend:</strong> {project.backend}</p>
                            <p><strong>Frontend:</strong> {project.frontend}</p>
                            <p><strong>Project Description:</strong> {project.projectDescription}</p>
                            <button onClick={() => handleEditToggle(project)}>Edit</button>
                        </div>
                    ))
                ) : (
                    <p>No professional projects available.</p>
                )}

                <h2>Personal Projects</h2>
                {personalProjects.length > 0 ? (
                    personalProjects.map((project, index) => (
                        <div key={index}>
                            <h3>{index + 1}. {project.title}</h3>
                            <p><strong>Client:</strong> {project.client}</p>
                            <p><strong>Communication Protocols:</strong> {project.communicationProtocols}</p>
                            <p><strong>Database:</strong> {project.database}</p>
                            <p><strong>Backend:</strong> {project.backend}</p>
                            <p><strong>Frontend:</strong> {project.frontend}</p>
                            <p><strong>Project Description:</strong> {project.projectDescription}</p>
                            <button onClick={() => handleEditToggle(project)}>Edit</button>
                        </div>
                    ))
                ) : (
                    <p>No personal projects available.</p>
                )}

                <h2>College Projects</h2>
                {collegeProjects.length > 0 ? (
                    collegeProjects.map((project, index) => (
                        <div key={index}>
                            <h3>{index + 1}. {project.title}</h3>
                            <p><strong>Client:</strong> {project.client}</p>
                            <p><strong>Communication Protocols:</strong> {project.communicationProtocols}</p>
                            <p><strong>Database:</strong> {project.database}</p>
                            <p><strong>Backend:</strong> {project.backend}</p>
                            <p><strong>Frontend:</strong> {project.frontend}</p>
                            <p><strong>Project Description:</strong> {project.projectDescription}</p>
                            <button onClick={() => handleEditToggle(project)}>Edit</button>
                        </div>
                    ))
                ) : (
                    <p>No college projects available.</p>
                )}
            </div>

            <Footer />
        </div>
    );
}
