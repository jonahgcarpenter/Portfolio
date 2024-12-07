import React from 'react';

interface ProjectsDriveProps {
  isOpen?: boolean;
}

const ProjectsDrive: React.FC<ProjectsDriveProps> = ({ isOpen = false }) => {
  return (
    <div className={`projects-drive ${isOpen ? 'open' : ''}`}>
      <h2>Projects</h2>
      {/* Add project content here */}
    </div>
  );
};

export default ProjectsDrive;
