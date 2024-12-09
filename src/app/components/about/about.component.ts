import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HomeLab {
  name: string;
  purpose: string;
  specs?: string;
}

interface Language {
  name: string;
  experience: string;
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
            <div class="space-y-6">
              <div *ngFor="let lang of aboutData.languages" class="space-y-2">
                <div class="flex justify-between items-center">
                  <h4 class="text-xl font-semibold text-white">{{ lang.name }}</h4>
                  <span class="text-pink-400">{{ lang.experience }}</span>
                </div>
                <p class="text-gray-400">{{ lang.details }}</p>
              </div>
            </div>
          </div>

          <!-- HomeLab Section -->
          <div class="bg-purple-800/50 rounded-xl p-8 space-y-6">
            <h3 class="text-2xl font-semibold text-pink-400">My HomeLab Setup</h3>
            <p class="text-gray-300 mb-6">I maintain a personal home lab environment where I experiment with various technologies and self-host services.</p>
            <div class="space-y-6">
              <div *ngFor="let server of aboutData.homeLab" class="border-l-4 border-pink-400 pl-4 space-y-2">
                <h4 class="text-xl font-semibold text-white">{{ server.name }}</h4>
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
        name: 'Proxmox Hypervisor',
        purpose: 'Main virtualization server hosting various VMs and containers',
        specs: 'AMD Ryzen 7, 64GB RAM, 2TB NVMe Storage'
      },
      {
        name: 'TrueNAS Server',
        purpose: 'Network Attached Storage for media and backups',
        specs: '24TB Raw Storage in ZFS RAID, 32GB RAM'
      },
      {
        name: 'Home Automation Server',
        purpose: 'Running Home Assistant for smart home automation and monitoring',
        specs: 'Raspberry Pi 4 with 8GB RAM'
      },
      {
        name: 'Personal Cloud',
        purpose: 'Self-hosted services including Nextcloud, Bitwarden, and Nginx Proxy Manager',
        specs: 'Docker containers running on Proxmox VM'
      }
    ],
    languages: [
      {
        name: 'TypeScript/JavaScript',
        experience: '3 years',
        details: 'Extensive experience with modern ES6+ features, Angular, Node.js, and React development.'
      },
      {
        name: 'Python',
        experience: '2 years',
        details: 'Used for backend development, automation scripts, and data analysis projects.'
      },
      {
        name: 'Java',
        experience: '2 years',
        details: 'Experience in building enterprise applications and Android development.'
      },
      {
        name: 'C#',
        experience: '1 year',
        details: 'Developed Windows applications and Unity game projects.'
      }
    ]
  };
}
