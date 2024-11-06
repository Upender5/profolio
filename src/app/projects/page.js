import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fetchProfessionalProjects, fetchPersonalProjects, addProject, editProject } from '../../api/projects';

export default function ProjectsPage() {
    const [professionalProjects, setProfessionalProjects] = useState([]);
    const [personalProjects, setPersonalProjects] = useState([]);
    const [isAdding, setIsAdding] = useState(false);  // Toggle for add form
    const [isEditing, setIsEditing] = useState(null); // Stores the project ID being edited
    const [formData, setFormData] = useState({  // Form data for add/edit
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
        async function getProfessionalProjects() {
            const data = await fetchProfessionalProjects();
            setProfessionalProjects(data);
        }

        async function getPersonalProjects() {
            const data = await fetchPersonalProjects();
            setPersonalProjects(data);
        }

        getProfessionalProjects();
        getPersonalProjects();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddToggle = () => {
        setIsAdding(!isAdding);
        setFormData({});  // Reset form data when toggling
    };

    const handleEditToggle = (project) => {
        setIsEditing(project._id);
        setFormData(project);  // Populate form data with the selected project for editing
    };

    const handleAddProject = async () => {
        const newProject = await addProject(formData);
        setProfessionalProjects([...professionalProjects, newProject]);
        handleAddToggle();  // Close add form
    };

    const handleEditProject = async () => {
        const updatedProject = await editProject(isEditing, formData);
        setProfessionalProjects(professionalProjects.map(project => 
            project._id === isEditing ? updatedProject : project
        ));
        setIsEditing(null);  // Exit edit mode
    };

    return (
        <div>
            <Header />
            <h1>My Projects</h1>
            <p>Here are some of the projects I have worked on:</p>

            {/* Add Project Form */}
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

            {/* Edit Project Form */}
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
                {professionalProjects.map((project, index) => (
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
                ))}

                <h2>Personal Projects</h2>
                {personalProjects.map((project, index) => (
                    <div key={index}>
                        <h3>{index + 1}. {project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View on {project.platform}</a>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}
