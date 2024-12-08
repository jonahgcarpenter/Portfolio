import React from 'react';
import '../styles/Experience.css';

interface ExperienceProps {
  onBack: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ onBack }) => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="experience-content">
        {/* Add your experience content here */}
      </div>
    </div>
  );
};

export default Experience;