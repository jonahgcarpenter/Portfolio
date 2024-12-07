import React from 'react';

interface EducationDriveProps {
  isOpen?: boolean;
}

const EducationDrive: React.FC<EducationDriveProps> = ({ isOpen = false }) => {
  return (
    <div className={`education-drive ${isOpen ? 'open' : ''}`}>
      <h2>Education</h2>
      {/* Add Education content here */}
      <p>test</p>
    </div>
  );
};

export default EducationDrive;
