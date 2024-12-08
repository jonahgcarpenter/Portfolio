import React from 'react';
import '../styles/Education.css';

interface EducationProps {
  onBack: () => void;
}

const Education: React.FC<EducationProps> = ({ onBack }) => {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="education-content">
        {/* Add your education content here */}
      </div>
    </div>
  );
};

export default Education;