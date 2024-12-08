import React from 'react';

const AprilsLilPugs: React.FC = () => {
  return (
    <>
      <h2>April's Lil Pugs</h2>
      <div className="project-details">
        <h3>Overview</h3>
        <p>An e-commerce platform for a small pug breeding business with appointment scheduling</p>
        
        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>Stripe API</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
        </ul>

        <h3>Key Features</h3>
        <ul>
          <li>Online booking system</li>
          <li>Secure payment processing</li>
          <li>Photo gallery</li>
          <li>Customer testimonials</li>
        </ul>

        <h3>GitHub Repository</h3>
        <a href="https://github.com/yourusername/aprils-lil-pugs" target="_blank" rel="noopener noreferrer">
          View Source Code
        </a>
      </div>
    </>
  );
};

export default AprilsLilPugs;