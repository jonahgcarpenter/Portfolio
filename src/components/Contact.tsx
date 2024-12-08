import React from 'react';
import '../styles/Contact.css';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-links">
        <div className="contact-item">
          <a href="https://github.com/jonahgcarpenter" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/jonah-carpenter-aa2644264/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:jonahgcarpenter@gmail.com">
            EMAIL
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;