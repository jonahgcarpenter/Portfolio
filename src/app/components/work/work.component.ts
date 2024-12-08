import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="work">
      <h2>My Work</h2>
      <div>
        <div *ngFor="let project of projects; trackBy: trackByTitle" class="project-card">
          <img *ngIf="project.imageUrl" [src]="project.imageUrl" [alt]="project.title">
          <h3>{{project.title}}</h3>
          <p>{{project.description}}</p>
          <div>
            <span *ngFor="let tech of project.technologies">{{tech}}</span>
          </div>
          <a *ngIf="project.link" [href]="project.link" target="_blank">View Project →</a>
        </div>
      </div>
    </section>
  `
})
export class WorkComponent {
  projects: Project[] = [
    {
      title: 'Example Project 1',
      description: 'A brief description of your first project',
      technologies: ['Angular', 'TypeScript', 'TailwindCSS'],
      link: 'https://example.com/project1'
    },
    // Add more projects as needed
  ];

  trackByTitle(index: number, project: Project): string {
    return project.title;
  }
}
