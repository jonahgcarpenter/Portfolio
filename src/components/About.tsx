import { useState } from 'react';

function About() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section>
      <h1 
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{ cursor: 'pointer' }}
      >
        About Me {isCollapsed ? '▼' : '▲'}
      </h1>
      
      {!isCollapsed && (
        <>
          <article>
            <h2>Introduction</h2>
            <p>
              Hi, I'm [Your Name]. I'm a software developer passionate about creating
              meaningful and impactful applications.
            </p>
          </article>

          <article>
            <h2>Background</h2>
            <p>
              I have experience in web development, focusing on modern technologies
              and best practices. My journey in software development started [your story].
            </p>
          </article>

          <article>
            <h2>Skills</h2>
            <ul>
              <li>Frontend Development (React, TypeScript, HTML, CSS)</li>
              <li>Backend Development (Node.js, Express)</li>
              <li>Database Management (SQL, MongoDB)</li>
              <li>Version Control (Git)</li>
            </ul>
          </article>

          <article>
            <h2>Interests</h2>
            <p>
              Outside of coding, I enjoy [your interests/hobbies].
              I'm always eager to learn new technologies and tackle challenging problems.
            </p>
          </article>
        </>
      )}
    </section>
  )
}

export default About