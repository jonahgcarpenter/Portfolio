
import React from 'react';

const RentReceipts: React.FC = () => {
  return (
    <>
      <h2>Rent Receipts</h2>
      <div className="project-details">
        <h3>Overview</h3>
        <p>Digital rent receipt generator and management system for landlords and tenants</p>
        
        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>Firebase</li>
          <li>PDF Generation API</li>
          <li>Material-UI</li>
        </ul>

        <h3>Key Features</h3>
        <ul>
          <li>Automated receipt generation</li>
          <li>Payment tracking</li>
          <li>Tenant management</li>
          <li>PDF export functionality</li>
        </ul>

        <h3>GitHub Repository</h3>
        <a href="https://github.com/yourusername/rent-receipts" target="_blank" rel="noopener noreferrer">
          View Source Code
        </a>
      </div>
    </>
  );
};

export default RentReceipts;