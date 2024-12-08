import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home">
      <h1>Welcome to my Portfolio</h1>
      
      <section id="background" class="section">
        <h2>My Background</h2>
        <p>
          [Add your tech background here - describe your journey, skills, and experience]
        </p>
      </section>

      <section id="projects" class="section">
        <h2>Projects</h2>
        <div class="projects-grid">
          <!-- Add your projects here. Example structure: -->
          <article class="project-card">
            <h3>Project Name</h3>
            <p>Project description</p>
            <div class="tech-stack">
              <span>Technologies used</span>
            </div>
            <a href="#">View Project</a>
          </article>
        </div>
      </section>
    </section>
  `
})
export class HomeComponent {}
