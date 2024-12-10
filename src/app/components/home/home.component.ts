import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  school: string;
  degree: string;
  year: string;
  description?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="text-white py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div class="w-full space-y-6">
            <h1 class="text-4xl md:text-6xl font-bold leading-tight">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Full Stack Developer
              </span>
            </h1>
            <p class="text-xl text-gray-300">
              Using my computer skills to make my life easier
            </p>
            <div class="flex gap-4">
              <button 
                (click)="copyEmail()" 
                class="px-6 py-3 rounded-lg transition-colors bg-purple-500 text-white hover:bg-purple-600"
              >
                {{ buttonText }}
              </button>
              <a 
                href="/resume.pdf"
                download="Jonah_Carpenter_Resume.pdf"
                (click)="handleResumeClick($event)"
                class="px-6 py-3 rounded-lg transition-colors border border-pink-500 hover:bg-pink-500/10"
              >
                {{ resumeButtonText }}
              </a>
            </div>
          </div>
          <div class="w-3/4 md:w-1/2 mx-auto">
            <div class="aspect-square rounded-full overflow-hidden border-4 border-pink-500/30 shadow-xl shadow-purple-500/20">
              <img 
                src="profilepic.jpg" 
                alt="Profile Picture" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="mt-32 space-y-8">
          <h2 class="text-3xl font-bold">My Purpose</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <p class="text-gray-300 leading-relaxed">
                Hi, I'm Jonah! As an upcoming Computer Science graduate from the University of Mississippi, 
                I combine technical expertise with hands-on development experience. My time at Ole Miss has
                equipped me with strong problem-solving skills and a passion for creating innovative solutions.
              </p>
              <p class="text-gray-300 leading-relaxed">
                Through my role at the IT Helpdesk and various personal development projects, I've learned to bridge the gap between complex technology and user-friendly solutions. I'm particularly passionate
                about full-stack development that solves real-world problems.
              </p>
              <p class="text-gray-300 leading-relaxed">
                In my free time, you can find me exploring new technologies, contributing to my open-source projects,
                or watching a movie.
              </p>
            </div>
            <div class="bg-purple-800/50 rounded-xl p-6 space-y-4">
              <h3 class="text-xl font-semibold text-pink-400">Education</h3>
              <div class="space-y-4">
                <div *ngFor="let edu of education" class="border-l-4 border-pink-400 pl-4 space-y-2">
                  <h4 class="text-xl font-semibold text-white">{{ edu.school }}</h4>
                  <p class="text-gray-300">{{ edu.degree }} ({{ edu.year }})</p>
                  <p *ngIf="edu.description" class="text-gray-400 text-sm">{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  buttonText = 'Copy My Email!';
  resumeButtonText = 'Download Resume';
  private email = 'jonahgcarpenter@gmail.com';

  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.email);
      this.buttonText = 'Copied To Clipboard!';
      setTimeout(() => {
        this.buttonText = 'Copy My Email!';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }

  handleResumeClick(event: MouseEvent) {
    this.resumeButtonText = 'Downloading...';
    setTimeout(() => {
      this.resumeButtonText = 'Success!';
      setTimeout(() => {
        this.resumeButtonText = 'Download Resume';
      }, 1000);
    }, 1500);
  }

  education: Education[] = [
    {
      school: 'University of Mississippi',
      degree: 'Bachelor Degree in Computer Science',
      year: '2025',
      description: 'Oxford, Mississippi'
    },
    {
      school: 'Itawamba Community College',
      degree: 'Associates Degree in Computer Science',
      year: '2022',
      description: 'Fulton, Mississippi'
    }
  ];
}
