import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-container">
      <h2 class="section-title">About Me</h2>
      <div class="profile-container">
        <div class="profile-image">
          <img src="assets/profile-image.jpg" alt="Profile Picture" />
        </div>
        <div class="profile-content">
          <h3>Full Stack Developer</h3>
          <p>
            Hi there! I'm a dedicated Full Stack Developer with a passion for creating efficient and scalable web applications. 
            My journey in software development started with a curiosity for problem-solving and has evolved into a professional 
            career where I get to build innovative solutions every day.
          </p>
          <div class="skills-overview">
            <h4>Core Competencies:</h4>
            <ul>
              <li>Frontend Development (Angular, React, TypeScript)</li>
              <li>Backend Development (Node.js, .NET)</li>
              <li>Database Management (SQL, MongoDB)</li>
              <li>Cloud Services (AWS, Azure)</li>
            </ul>
          </div>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or sharing knowledge with the developer community. I believe in writing clean, maintainable code and
            creating user-friendly experiences that make a difference.
          </p>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
