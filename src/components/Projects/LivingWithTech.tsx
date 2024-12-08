import React from 'react';

const LivingWithTech: React.FC = () => {
  return (
    <>
      <h2>Living With Tech</h2>
      <div className="project-details">
        <h3>Overview</h3>
        <p>A modern tech blog focusing on the intersection of technology and daily life</p>
        
        <h3>Technologies Used</h3>
        <ul>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Markdown</li>
          <li>Vercel</li>
        </ul>

        <h3>Key Features</h3>
        <ul>
          <li>Responsive design</li>
          <li>Dark/Light mode</li>
          <li>SEO optimization</li>
          <li>Comment system</li>
        </ul>

        <h3>GitHub Repository</h3>
        <a href="https://github.com/yourusername/living-with-tech" target="_blank" rel="noopener noreferrer">
          View Source Code
        </a>
      </div>
    </>
  );
};

export default LivingWithTech;