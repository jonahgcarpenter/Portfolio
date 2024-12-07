import React from 'react';

interface AboutDriveProps {
  isOpen?: boolean;
}

const AboutDrive: React.FC<AboutDriveProps> = ({ isOpen = false }) => {
  return (
    <div className={`about-drive ${isOpen ? 'open' : ''}`}>
      <h2>About</h2>
      {/* Add about content here */}
      <p>test</p>
    </div>
  );
};

export default AboutDrive;
