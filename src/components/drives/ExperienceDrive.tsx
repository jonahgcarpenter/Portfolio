import React from 'react';

interface ExperienceDriveProps {
  isOpen?: boolean;
}

const ExperienceDrive: React.FC<ExperienceDriveProps> = ({ isOpen = false }) => {
  return (
    <div className={`experience-drive ${isOpen ? 'open' : ''}`}>
      <h2>Experience</h2>
      {/* Add experience content here */}
      <p>test</p>
    </div>
  );
};

export default ExperienceDrive;
