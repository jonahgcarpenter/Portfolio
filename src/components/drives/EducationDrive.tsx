import React from 'react';

interface EducationDriveProps {
  isOpen?: boolean;
}

const EducationDrive: React.FC<EducationDriveProps> = ({ isOpen = false }) => {
  return (
    <div className={`Education-drive ${isOpen ? 'open' : ''}`}>
      <h2>Education</h2>
      {/* Add Education content here */}

    </div>
  );
};

export default EducationDrive;
