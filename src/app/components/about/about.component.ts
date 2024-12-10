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
            <p>{{ aboutData.location }}</p>
            <p>Age: {{ calculateAge() }}</p>
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
            <p class="text-gray-300 mb-6">A collection of programming languages I've worked with, rated and sorted by my confidence level in using them effectively.</p>
            <div class="space-y-6">
              <div *ngFor="let lang of getDisplayedLanguages()" class="border-l-4 border-pink-400 pl-4 space-y-2">
                <h4 class="text-xl font-semibold text-white">{{ lang.name }}</h4>
                <p class="text-gray-300">{{ lang.details }}</p>
                <p class="text-gray-400 text-sm">Confidence: {{ lang.confidence }}/10</p>
              </div>
              <button 
                *ngIf="sortedLanguages.length > 3"
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
            <p class="text-gray-300 mb-6">I maintain two personal UnRaid servers where I experiment with various technologies and self-host services.</p>
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
    location: 'Oxford, Mississippi',
    birthDate: new Date(2001, 9, 22), // Month is 0-based, so 9 is October
    description: `Hi my name is Jonah. My interest in technology really started with Smart Home Automation and has grown into a passion for development. After I saw how much we can utilize technology to make our lives easier, I decided to start learning how to make meaningful applications that can help fix issues in my day-to-day life. I even went so far as building, and implementing my own home server to handle this new obsession. For the most part I am still learning, but that's what makes it more interesting. In the future I wish to complete more Web-Progressive projects that can be more easily accessable with iOS/Android/etc...`,
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
        purpose: 'A real-time object detection system for my security cameras. Where we also use Compreface for facial recognition to run automations in Home Assistant.',
        specs: 'Docker Container'
      },
      {
        name: 'Double-Take',
        purpose: 'Paired with Frigate, creates facial recognition automations in Home Assistant.',
        specs: 'Home Assistant Addon'
      },
      {
        name: 'Nginx-Proxy-Manager',
        purpose: 'Best way to manage my forward / backwards proxies for all my web applications.',
        specs: 'Docker Container'
      },
      {
        name: 'Nginx',
        purpose: 'Used to host my personal website and other web applications.',
        specs: 'Docker Container'
      },
      {
        name: 'MariaDB',
        purpose: 'Main database server for all my applications.',
        specs: 'Docker Container'
      },
      {
        name: 'Cloudflare-DDNS',
        purpose: 'Updates my DNS records for my web domains.',
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
        name: 'MySQL',
        confidence: 8,
        details: 'Majority of my projects at the University of Mississippi were built with the schools MariaDB server.'
      },
      {
        name: 'React Frameworks',
        confidence: 8,
        details: 'All of my current projects are built with some version of React.'
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
        name: 'R',
        confidence: 5,
        details: 'I took some data science classes that primarily used R for visualizing data.'
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

  isLanguagesExpanded = false;
  isHomeLabExpanded = false;

  get sortedLanguages(): Language[] {
    return [...this.aboutData.languages].sort((a, b) => b.confidence - a.confidence);
  }

  getDisplayedLanguages(): Language[] {
    return this.isLanguagesExpanded ? this.sortedLanguages : this.sortedLanguages.slice(0, 3);
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
    const years = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    const days = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return `${years} years (${days} days)`;
  }
}