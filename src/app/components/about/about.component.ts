import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HomeLab {
  name: string;
  purpose: string;
  specs?: string;
}

interface Language {
  name: string;
  details: string;
}

interface WorkExperience {
  name: string;
  startYear: number;
  endYear?: number;
  description: string;
}

interface AboutInfo {
  title: string;
  location: string;
  birthDate: Date;
  description: string;
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
          <div class="text-xl text-gray-300 space-y-1">
            <p>Age: {{ calculateAge() }}</p>
            <p>Location: {{ aboutData.location }}</p>
          </div>
        </div>

        <!-- Main Content -->
        <div class="space-y-12 last:mb-0">
          <!-- Personal Journey -->
          <div class="prose prose-lg text-gray-300">
            <p class="text-lg leading-relaxed">{{ aboutData.description }}</p>
          </div>

          <!-- Language Experience Section -->
          <div class="bg-purple-800/50 rounded-xl p-8 space-y-6">
            <h3 class="text-2xl font-semibold text-pink-400">Programming Languages</h3>
            <p class="text-gray-300 mb-6">A collection of programming languages I've worked with.</p>
            <div class="space-y-6">
              <div *ngFor="let lang of getDisplayedLanguages()" class="border-l-4 border-pink-400 pl-4 space-y-2">
                <h4 class="text-xl font-semibold text-white">{{ lang.name }}</h4>
                <p class="text-gray-300">{{ lang.details }}</p>
              </div>
              <button 
                *ngIf="aboutData.languages.length > 3"
                (click)="toggleLanguages()"
                class="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-md transition-colors duration-200"
              >
                {{ isLanguagesExpanded ? 'Show Less' : 'Show More' }}
              </button>
            </div>
          </div>

          <!-- HomeLab Section -->
          <div class="bg-purple-800/50 rounded-xl p-8 space-y-6">
            <h3 class="text-2xl font-semibold text-pink-400">My HomeLab Setup</h3>
            <p class="text-gray-300 mb-6">I have implememted and currently maintain personal servers where I experiment with various technologies and self-hosted services.</p>
            <div class="space-y-6">
              <div *ngFor="let server of getDisplayedHomeLab()" class="border-l-4 border-pink-400 pl-4 space-y-2">
                <div class="flex justify-between items-center">
                  <h4 class="text-xl font-semibold text-white">{{ server.name }}</h4>
                </div>
                <p class="text-gray-300">{{ server.purpose }}</p>
                <p *ngIf="server.specs" class="text-gray-400 text-sm">{{ server.specs }}</p>
              </div>
              <button 
                *ngIf="aboutData.homeLab.length > 4"
                (click)="toggleHomeLab()"
                class="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-md transition-colors duration-200"
              >
                {{ isHomeLabExpanded ? 'Show Less' : 'Show More' }}
              </button>
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
    title: 'More About Me',
    location: 'Oxford, MS',
    birthDate: new Date('2001-10-22'), // Changed to use ISO date format for better accuracy
    description: `My journey into technology began with a fascination for Smart Home Automation, which quickly evolved into a passion for software development. Witnessing how technology can simplify and enhance everyday life inspired me to start creating meaningful applications to solve real-world problems. This curiosity led me to build and implement my own home server to support my growing interests. I'm constantly learning and evolving as a developer, and it's this continuous pursuit of knowledge that keeps me excited about what I do.`,
    homeLab: [
      {
        name: 'UnRaid',
        purpose: 'My main server where I host all my services and applications. I use it almost like my own personal test dummy.',
        specs: 'AMD Ryzen 5, 32GB RAM, 2TB Redundant Storage'
      },
      {
        name: 'Home Assistant',
        purpose: 'The best part of a smarthome, the main hub for all my smart devices that help me in my day-to-day life.',
        specs: 'Home Assistant Yellow'
      },
      {
        name: 'Frigate',
        purpose: 'A real-time object detection system and NVR for my security cameras.',
        specs: 'Docker Container'
      },
      {
        name: 'Double-Take',
        purpose: 'Unified UI and API for processing and training images for facial recognition.',
        specs: 'Home Assistant Addon'
      },
      {
        name: 'Nginx-Proxy-Manager',
        purpose: 'Best way to manage network proxies for all my web applications.',
        specs: 'Docker Container'
      },
      {
        name: 'Authelia',
        purpose: 'Implemented to secure some public applications with Google 2FA.',
        specs: 'Docker Container'
      },

    ],
    languages: [
      {
        name: 'SQL',
        details: 'Proficient in database design, complex queries, and data manipulation using MariaDB and MySQL.'
      },
      {
        name: 'React',
        details: 'Experience building modern web applications with React, including hooks, context API, and state management.'
      },
      {
        name: 'PHP',
        details: 'Strong background in server-side development using PHP, particularly in academic projects at Ole Miss.'
      },
      {
        name: 'HTML',
        details: 'Extensive experience in semantic markup and modern HTML5 features for web development.'
      },
      {
        name: 'CSS',
        details: 'Proficient in responsive design, CSS frameworks like Tailwind, and modern layout techniques.'
      },
      {
        name: 'TypeScript/JavaScript',
        details: 'Strong foundation in both frontend and backend development using modern ES6+ features and TypeScript.'
      },
      {
        name: 'Firebase',
        details: 'Experience with Firebase Authentication, Realtime Database, and Cloud Functions for web applications.'
      },
      {
        name: 'MongoDB',
        details: 'Familiar with NoSQL database design and CRUD operations in MongoDB.'
      },
      {
        name: 'Python',
        details: 'Skilled in developing Flask APIs, automation scripts, and basic data processing tasks.'
      },
      {
        name: 'R',
        details: 'Basic knowledge of data analysis and visualization techniques using R programming.'
      },
      {
        name: 'Java',
        details: 'Experience building robust backend services using Spring Boot; strong understanding of object-oriented programming.'
      },
      {
        name: 'C++',
        details: 'Basic understanding of memory management and fundamental programming concepts.'
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

  isLanguagesExpanded = false;
  isHomeLabExpanded = false;

  getDisplayedLanguages(): Language[] {
    return this.isLanguagesExpanded ? this.aboutData.languages : this.aboutData.languages.slice(0, 3);
  }

  getDisplayedHomeLab(): HomeLab[] {
    return this.isHomeLabExpanded ? this.aboutData.homeLab : this.aboutData.homeLab.slice(0, 4);
  }

  toggleLanguages(): void {
    this.isLanguagesExpanded = !this.isLanguagesExpanded;
  }

  toggleHomeLab(): void {
    this.isHomeLabExpanded = !this.isHomeLabExpanded;
  }

  calculateYearsWorked(work: WorkExperience): string {
    const endYear = work.endYear || new Date().getFullYear();
    const years = endYear - work.startYear;
    return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
  }

  calculateAge(): string {
    const today = new Date();
    const birthDate = this.aboutData.birthDate;
    let years = today.getFullYear() - birthDate.getFullYear();
    
    // Adjust age if birthday hasn't occurred this year
    if (
      today.getMonth() < birthDate.getMonth() || 
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      years--;
    }
    
    const days = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return `${years} years (${days} days)`;
  }
}
