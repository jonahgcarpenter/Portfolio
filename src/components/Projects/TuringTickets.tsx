import React from 'react';

const TuringTickets: React.FC = () => {
  return (
    <>
      <h2>Turing Tickets</h2>
      <div className="project-details">
        <h3>Overview</h3>
        <p>A ticket management system for events with secure authentication and real-time updates</p>
        
        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>JWT Authentication</li>
        </ul>

        <h3>Key Features</h3>
        <ul>
          <li>Secure user authentication</li>
          <li>Real-time ticket availability</li>
          <li>QR code ticket generation</li>
          <li>Event management dashboard</li>
        </ul>

        <h3>GitHub Repository</h3>
        <a href="https://github.com/yourusername/turing-tickets" target="_blank" rel="noopener noreferrer">
          View Source Code
        </a>
      </div>
    </>
  );
};

export default TuringTickets;