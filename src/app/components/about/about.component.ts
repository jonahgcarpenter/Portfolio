import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HomeLab {
  name: string;
  purpose: string;
  specs?: string;
}

interface Language {
  name: string;
  confidence: number;
  details: string;
}

interface WorkExperience {
  name: string;
  startYear: number;
  endYear?: number;  // Make endYear optional
  description: string;
}

interface AboutInfo {
  title: string;
  role: string;
  description: string;
  journey: string;
  homeLab: HomeLab[];
  languages: Language[];
  workExperience: WorkExperience[];
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

          <!-- Work Experience Section -->
          <div class="bg-purple-800/50 rounded-xl p-8 space-y-6">
            <h3 class="text-2xl font-semibold text-pink-400">Work Experience</h3>
            <p class="text-gray-300 mb-6">Previous work experiences that have shaped my professional journey.</p>
            <div class="space-y-6">
              <div *ngFor="let work of aboutData.workExperience" class="border-l-4 border-pink-400 pl-4 space-y-2">
                <h4 class="text-xl font-semibold text-white">{{ work.name }}</h4>
                <p class="text-gray-300">{{ work.description }}</p>
                <p class="text-gray-400 text-sm">
                  Period: {{ work.startYear }} - {{ work.endYear || 'Present' }}
                  <span class="ml-2">({{ calculateYearsWorked(work) }})</span>
                </p>
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
    description: `My intrest in technology started with Smart Home Automation and has grown into a passion for software development. After I saw how much we can utilize technology to make our lives easier, I decided to start learning how to make meaningful applications that can help fix issues in my day-to-day life.`,
    journey: `For the most part I am still learning, but thats what makes it more interesting. In the future I wish to complete more Software Development projects, as I find adding functionaly more fun than anything else.`,
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
    ],
    workExperience: [
      {
        name: 'Walk-On\'s Sports Bistreaux',
        startYear: 2023,
        description: 'I worked as a server at Walk-Ons Restaurant in Oxford, MS. I where I futhered my existing skills, by expanding on my customer service skills.'
      },
      {
        name: 'IT Helpdesk at University of Mississippi',
        startYear: 2022,
        endYear: 2024,
        description: 'I worked as a student worker at the IT Helpdesk at the University of Mississippi. I learned how to troubleshoot and fix issues with computers, printers and proprietary systems used by the University.'
      },
      {
        name: 'Fairpark Grill',
        startYear: 2019,
        endYear: 2022,
        description: 'I worked as a server at the Fairpark-Grill Restaurant in Tupelo, MS. I learned how to work in a fast-paced environment and how to work with a team to get things done.'
      }
    ]
  };

  get sortedLanguages(): Language[] {
    return [...this.aboutData.languages].sort((a, b) => b.confidence - a.confidence);
  }

  calculateYearsWorked(work: WorkExperience): string {
    const endYear = work.endYear || new Date().getFullYear();
    const years = endYear - work.startYear;
    return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
  }
}