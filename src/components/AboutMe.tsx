import React from 'react';
import '../styles/AboutMe.css';

interface AboutMeProps {
  onBack: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onBack }) => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <img 
        src="/images/profilepic.jpg" 
        alt="Profile Picture" 
        className="profile-picture"
      />
      <div className="about-me-text">
        <p>
          Hi, I'm Jonah!
        </p>
        <p>
          I'm a soon-to-be graduate with a Bachelor's degree in Computer Science from the University of Mississippi, 
          where I've had the incredible opportunity to deepen my technical expertise and build hands-on experience in development.
        </p>
        <p>
          Throughout my time at Ole Miss, I've worked on a variety of projects that demonstrate my skills in development, 
          problem-solving, and innovative thinking. Whether it's creating responsive applications, or exploring new technologies, 
          I'm always excited to learn and grow. Curious about my work? Check out my GitHub for a closer look at some of the 
          projects I've been passionate about.
        </p>
        <p>
          Beyond academics, I honed my problem-solving and customer service skills as a technician at the IT Helpdesk. 
          This experience taught me how to address technical issues effectively while communicating solutions in a clear, 
          user-friendly way—an essential skill for bridging the gap between technology and people.
        </p>
        <p>
          I'm particularly passionate about leveraging technology to solve real-world problems and improve lives. Whether it's 
          designing software that streamlines workflows or developing tools that enhance user experiences, I'm driven by the 
          potential to make an impact.
        </p>
        <p>
          As I transition into the professional world, I'm eager to apply my skills in full-stack development, software engineering, 
          and problem-solving to tackle new challenges. If you're looking for a dedicated and versatile developer with a strong 
          foundation in both technical and interpersonal skills, I'd love to connect!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;