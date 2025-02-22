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
    <section id="work" class="text-white py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            >
              My Projects
            </span>
          </h1>
          <p class="text-xl text-gray-300">
            I'm always working on something so check my GitHub for more projects
            and consistent updates!
          </p>
        </div>

        <!-- Project Navigation -->
        <div class="flex flex-wrap gap-4 mb-12">
          <button
            *ngFor="let project of projects; let i = index"
            type="button"
            (click)="setSlide(i)"
            [class]="
              'px-4 py-2 rounded-lg transition-colors ' +
              (currentSlide === i
                ? 'bg-purple-500 text-white'
                : 'border border-pink-500 hover:bg-pink-500/10')
            "
          >
            {{ project.name }}
          </button>
        </div>

        <!-- Project Display -->
        <div class="space-y-12 last:mb-0">
          <div
            *ngFor="let project of projects; let i = index"
            [class.hidden]="currentSlide !== i"
            class="grid md:grid-cols-2 gap-8"
          >
            <div class="bg-purple-800/50 rounded-xl p-6 h-full flex flex-col">
              <h3 class="text-xl font-semibold text-pink-400 mb-4">
                Project Details
              </h3>
              <div class="flex-1 flex flex-col">
                <div class="space-y-4">
                  <h4 class="text-lg font-semibold text-white">
                    {{ project.name }}
                  </h4>
                  <p class="text-gray-300">{{ project.description }}</p>
                  <h3 class="text-xl font-semibold text-pink-400">
                    Technologies Used
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      *ngFor="let tech of project.technologies"
                      class="px-4 py-2 bg-purple-950 text-white font-medium rounded-lg text-base"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <div class="mt-auto pt-6">
                  <div class="flex gap-4">
                    <a
                      *ngIf="project.liveLink"
                      [href]="project.liveLink"
                      target="_blank"
                      class="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                    >
                      View Live
                    </a>
                    <a
                      [href]="project.githubLink"
                      target="_blank"
                      class="px-6 py-3 border border-pink-500 hover:bg-pink-500/10 rounded-lg transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="relative aspect-square rounded-xl overflow-hidden border-4 border-pink-500/30 shadow-xl shadow-purple-500/20"
            >
              <img
                [src]="project.imageUrl"
                [alt]="project.name"
                class="w-full h-full object-cover pointer-events-none"
                (error)="handleImageError($event)"
              />
              <div
                (click)="prevSlide()"
                class="absolute left-0 top-0 w-1/4 h-full cursor-pointer flex items-center transition-opacity group"
              >
                <span
                  class="opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-125 bg-purple-500/80 p-2 rounded-r-lg"
                >
                  &#8592;
                </span>
              </div>
              <div
                (click)="nextSlide()"
                class="absolute right-0 top-0 w-1/4 h-full cursor-pointer flex items-center justify-end transition-opacity group"
              >
                <span
                  class="opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-125 bg-purple-500/80 p-2 rounded-l-lg"
                >
                  &#8594;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes fadeOut {
        0% {
          opacity: 0.7;
        }
        100% {
          opacity: 0;
        }
      }
      .animate-fadeOut {
        animation: fadeOut 2s ease-out forwards;
      }
    `,
  ],
})
export class WorkComponent {
  projects: Project[] = [
    {
      name: "April's Lil Pugs",
      description:
        "A website I built and currently maintain for my mom's pug breeding business. The website also has a admin panel where my mom can add, edit, and delete from the website on her own.",
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveLink: 'https://aprilslilpugs.com/',
      githubLink: 'https://github.com/jonahgcarpenter/ALP.git',
      imageUrl: 'alp.jpg',
    },
    {
      name: 'Turing Tickets',
      description:
        "An IT ticket system for my Senior Project class. As a solo project I was responsible for the design, implementation, and documentation of the project. This web application also uses's the PHPMailer library to send emails to users when their ticket is updated / changed.",
      technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
      liveLink: 'https://turing.cs.olemiss.edu/~jgcarpe2/CS487/Project/',
      githubLink: 'https://github.com/jonahgcarpenter/Turing-Tickets.git',
      imageUrl: 'turingtickets.jpg',
    },
    {
      name: 'Enhance Your Living With Technology',
      description:
        'A simple website I built for Web Development class. The website is a informational site about how I have personally leveraged smart home technology to enhance my life. You can login and view using the following credentials: Username: letmesee@gmail.com Password: letmesee',
      technologies: ['Vite:React', 'Firebase'],
      liveLink: 'https://turing.cs.olemiss.edu/~jgcarpe2/CS354/Project7/dist/',
      githubLink:
        'https://github.com/jonahgcarpenter/Enhance-Your-Living-With-Technology',
      imageUrl: 'smarthomes.jpg',
    },
    {
      name: 'Rent Receipts',
      description:
        'A simple python program I wrote to replace an Excel spreadsheet I was using to give my roomates receipts for the full cost of rent, water, and electricity bills per month. Where one of us pays all the seperate utilities and the other two pay more on rent so the cost is equal for all 3 roomates. Check out the web branch on github as im working on a web version!',
      technologies: ['Python'],
      liveLink: '',
      githubLink: 'https://github.com/jonahgcarpenter/Rent-Receipts',
      imageUrl: 'rentreceipts.jpg',
    },
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.projects.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.projects.length) % this.projects.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }

  handleImageError(event: any) {
    event.target.src = 'assets/placeholder.jpg';
  }
}
