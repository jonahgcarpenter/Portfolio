import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  imageUrl: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="work" class="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              My Projects
            </span>
          </h1>
          <p class="text-xl text-gray-300">Exploring creativity through code</p>
        </div>

        <!-- Project Navigation -->
        <div class="flex flex-wrap gap-4 mb-12">
          <button
            *ngFor="let project of projects; let i = index" 
            type="button"
            (click)="setSlide(i)"
            [class]="'px-4 py-2 rounded-lg transition-colors ' + 
              (currentSlide === i ? 'bg-purple-500 text-white' : 'border border-pink-500 hover:bg-pink-500/10')"
          >
            {{project.name}}
          </button>
        </div>

        <!-- Project Display -->
        <div class="space-y-12">
          <div *ngFor="let project of projects; let i = index"
               [class.hidden]="currentSlide !== i"
               class="grid md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <h2 class="text-3xl font-bold">{{project.name}}</h2>
              <p class="text-gray-300 text-lg leading-relaxed">{{project.description}}</p>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of project.technologies" 
                      class="px-3 py-1 bg-purple-800/50 text-pink-400 rounded-lg text-sm">
                  {{tech}}
                </span>
              </div>
              <div class="flex gap-4 pt-4">
                <a *ngIf="project.liveLink" 
                   [href]="project.liveLink" 
                   target="_blank"
                   class="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
                  View Live
                </a>
                <a [href]="project.githubLink" 
                   target="_blank"
                   class="px-6 py-3 border border-pink-500 hover:bg-pink-500/10 rounded-lg transition-colors">
                  Source Code
                </a>
              </div>
            </div>
            <div class="relative aspect-square rounded-xl overflow-hidden border-4 border-pink-500/30 shadow-xl shadow-purple-500/20">
              <img [src]="project.imageUrl" 
                   [alt]="project.name" 
                   class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                   (error)="handleImageError($event)"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class WorkComponent {
  projects: Project[] = [
    {
      name: 'AprilsLilPugs',
      description: 'Build for a local pug breeder to showcase and manage their grumble of pugs.',
      technologies: ['Vite','Firebase'],
      liveLink: 'https://alp.jonahsserver.com',
      githubLink: 'https://github.com/jonahgcarpenter/ALP.git',
      imageUrl: 'alp.jpg'
    },
    {
      name: 'Turing Tickets',
      description: 'An IT ticket system for my Senior Project that uses PHPMailer to send ticket updates to the client.',
      technologies: ['PHP','JavaScript','HTML','CSS','MySQL'],
      liveLink: 'https://turing.cs.olemiss.edu/~jgcarpe2/CS487/Project/',
      githubLink: 'https://github.com/jonahgcarpenter/Turing-Tickets.git',
      imageUrl: 'turingtickets.jpg'
    },
    {
      name: 'Enhance Your Living With Technology',
      description: 'Webpage that explains the benefits of smarthome technology.',
      technologies: ['JavaScript','HTML','CSS', 'Firebase'],
      liveLink: 'https://turing.cs.olemiss.edu/~jgcarpe2/CS354/Project7/dist/',
      githubLink: 'https://github.com/jonahgcarpenter/Enhance-Your-Living-With-Technology',
      imageUrl: 'smarthomes.jpg'
    },
    {
      name: 'Rent Receipts',
      description: 'A simple python program that generates receipts for my roomates parents.',
      technologies: ['Python'],
      liveLink: '',
      githubLink: 'https://github.com/jonahgcarpenter/Rent-Receipts',
      imageUrl: 'rentreceipts.jpg'
    },
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.projects.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.projects.length) % this.projects.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }

  handleImageError(event: any) {
    event.target.src = 'assets/placeholder.jpg'; // Fallback image
  }
}
