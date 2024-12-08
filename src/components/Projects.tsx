import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import TuringTickets from './Projects/TuringTickets';
import RentReceipts from './Projects/RentReceipts';
import LivingWithTech from './Projects/LivingWithTech';
import AprilsLilPugs from './Projects/AprilsLilPugs';

interface ProjectsProps {
  onProjectSelect: () => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

interface Project {
  id: number;
  title: string;
  description: string;
  component: React.ComponentType;
}

const projectsList: Project[] = [
  {
    id: 1,
    title: "Turing Tickets",
    description: "Event ticketing platform built with React and Node.js",
    component: TuringTickets
  },
  {
    id: 2,
    title: "Rent Receipts",
    description: "Digital rent receipt generator and manager",
    component: RentReceipts
  },
  {
    id: 3,
    title: "Living With Tech",
    description: "Tech blog and tutorial platform",
    component: LivingWithTech
  },
  {
    id: 4,
    title: "April's Lil Pugs",
    description: "E-commerce website for a local dog breeder",
    component: AprilsLilPugs
  }
];

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect, selectedProject, setSelectedProject }) => {
  useEffect(() => {
    const terminalContent = document.querySelector('.terminal-content');
    if (terminalContent) {
      terminalContent.scrollTop = 0;
    }
  }, [selectedProject]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    onProjectSelect();
  };

  if (selectedProject) {
    const ProjectComponent = selectedProject.component;
    return <ProjectComponent />;
  }

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-text">
        <p>
          Welcome to my projects section. Here you'll find a collection of my most significant works.
          Click on any project to learn more about it.
        </p>
      </div>
      <div className="projects">
        {projectsList.map(project => (
          <div 
            key={project.id}
            className="project-item" 
            onClick={() => handleProjectSelect(project)}
          >
            <span className="prompt">{'>>'}</span>
            <span className="project-title">{project.title}</span>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;