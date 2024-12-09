import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HomeLab {
  name: string;
  purpose: string;
  specs?: string;
}

interface Language {
  name: string;
  confidence: number;  // changed from experience: string
  details: string;
}

interface AboutInfo {
  title: string;
  role: string;
  description: string;
  journey: string;
  homeLab: HomeLab[];
  languages: Language[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {{ aboutData.title }}
            </span>
          </h1>
          <p class="text-xl text-gray-300">{{ aboutData.role }}</p>
        </div>

        <!-- Main Content -->
        <div class="space-y-12 last:mb-0">
          <!-- Personal Journey -->
          <div class="prose prose-lg text-gray-300">
            <p class="text-lg leading-relaxed">{{ aboutData.description }}</p>
            <p class="text-lg leading-relaxed">{{ aboutData.journey }}</p>
          </div>

          <!-- Language Experience Section -->
          <div class="bg-purple-800/50 rounded-xl p-8 space-y-6">
            <h3 class="text-2xl font-semibold text-pink-400">Programming Languages</h3>
            <p class="text-gray-300 mb-6">A collection of programming languages I've worked with, rated and sorted by my confidence level in using them effectively.</p>
            <div class="space-y-6">
              <div *ngFor="let lang of sortedLanguages" class="border-l-4 border-pink-400 pl-4 space-y-2">
                <h4 class="text-xl font-semibold text-white">{{ lang.name }}</h4>
                <p class="text-gray-300">{{ lang.details }}</p>
                <p class="text-gray-400 text-sm">Confidence: {{ lang.confidence }}/10</p>
              </div>
            </div>
          </div>

          <!-- HomeLab Section -->
          <div class="bg-purple-800/50 rounded-xl p-8 space-y-6">
            <h3 class="text-2xl font-semibold text-pink-400">My HomeLab Setup</h3>
            <p class="text-gray-300 mb-6">I maintain two personal UnRaid servers where I experiment with various technologies and self-host services.</p>
            <div class="space-y-6">
              <div *ngFor="let server of aboutData.homeLab" class="border-l-4 border-pink-400 pl-4 space-y-2">
                <div class="flex justify-between items-center">
                  <h4 class="text-xl font-semibold text-white">{{ server.name }}</h4>
                </div>
                <p class="text-gray-300">{{ server.purpose }}</p>
                <p *ngIf="server.specs" class="text-gray-400 text-sm">{{ server.specs }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  aboutData: AboutInfo = {
    title: 'About Me',
    role: 'Full Stack / Software Developer',
    description: `My journey into software development began with a fascination for technology and problem-solving. 
      What started as a curious exploration has evolved into a passionate pursuit of creating innovative solutions 
      through code.`,
    journey: `Throughout my academic journey, I've discovered my love for building applications that make a real 
      impact. I'm currently pursuing my Bachelor's degree while actively developing my skills in full-stack 
      development. I believe in continuous learning and pushing myself to explore new technologies and methodologies.`,
    homeLab: [
      {
        name: 'UnRaid Server',
        purpose: 'My main server where I experiment with various technologies and self-host services.',
        specs: 'AMD Ryzen 5, 32GB RAM, 2TB Redundant Storage'
      },
      {
        name: 'Home Assistant Server',
        purpose: 'The best part of a smarthome, the main hub for all my smart devices that help me in my day-to-day life.',
        specs: 'Home Assistant Yellow'
      },
      {
        name: 'Frigate Server',
        purpose: 'A real-time object detection system for my security cameras. Where we also use Compreface for facial recognition to run automations in Home Assistant.',
        specs: 'UnRaid Docker Container'
      }
    ],
    languages: [
      {
        name: 'MySQL',
        confidence: 8,
        details: 'Majority of my projects at the University of Mississippi were built with the schools MariaDB server.'
      },
      {
        name: 'PHP',
        confidence: 8,
        details: 'Majority of my projects at the University of Mississippi were built with PHP.'
      },
      {
        name: 'HTML',
        confidence: 9,
        details: 'Used in some of my web development projects for building responsive UIs.'
      },
      {
        name: 'CSS',
        confidence: 8,
        details: 'To make things look pretty and responsive.'
      },
      {
        name: 'TypeScript/JavaScript',
        confidence: 7,
        details: 'Have used in various projects for front-end and back-end development.'
      },
      {
        name: 'Firebase',
        confidence: 7,
        details: 'Used for an easy database backend in my personal projects when applicable.'
      },
      {
        name: 'Python',
        confidence: 4,
        details: 'Used for simple scripts in my free time'
      },
      {
        name: 'Java',
        confidence: 3,
        details: 'Developed small projects and algorithms while at Itawamba Community College.'
      },
      {
        name: 'C++',
        confidence: 3,
        details: 'Developed small projects and algorithms while at Itawamba Community College.'
      }
    ]
  };

  get sortedLanguages(): Language[] {
    return [...this.aboutData.languages].sort((a, b) => b.confidence - a.confidence);
  }
}
