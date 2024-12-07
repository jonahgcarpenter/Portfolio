import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/DriveWindow.css';

interface DriveProps {
  isOpen?: boolean;
  title?: string;
}

const AboutDrive: React.FC<DriveProps> = ({ isOpen = false, title }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;
  
  return (
    <div className="drive-window">
      <div className="drive-header">
        <h2>{title}</h2>
        <button onClick={() => navigate('/')} className="close-button">×</button>
      </div>
      <div className="drive-content">
        {/* Add specific content here */}
        <p>About content goes here</p>
      </div>
    </div>
  );
};

export default AboutDrive;
