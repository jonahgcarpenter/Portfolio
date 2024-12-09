import { Component, OnInit } from '@angular/core';
import { ViewportScroller, CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="w-full h-[100px] fixed top-0 backdrop-blur-xl bg-gradient-to-r from-purple-900/70 to-pink-900/70 border-b border-pink-500/20 z-50 transition-all duration-300">
      <div class="h-full max-w-6xl mx-auto flex justify-between items-center px-6">
        <!-- Logo/Brand -->
        <h1 class="text-2xl font-bold tracking-wider">
          <span class="relative">
            <span class="absolute -inset-1 blur-xl bg-gradient-to-r from-purple-500/30 to-pink-500/30"></span>
            <span class="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jonah Carpenter
            </span>
          </span>
        </h1>

        <!-- Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <button *ngFor="let section of sections"
                  (click)="selectSection($event, section)"
                  class="group relative px-4 py-2 rounded-lg border border-transparent hover:border-pink-500/30 transition-all duration-300"
          >
            <span class="relative z-10 text-white transition-all duration-300" 
                  [class]="currentSection === section ? 'text-pink-400' : 'group-hover:text-pink-400'">
              {{ section.toUpperCase() }}
            </span>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden relative">
          <button 
            (click)="toggleDropdown()"
            class="relative px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300"
          >
            <span class="text-white">
              {{ currentSection.toUpperCase() }}
            </span>
          </button>

          <div *ngIf="isDropdownOpen" 
               class="absolute right-0 mt-2 w-48 backdrop-blur-xl bg-gradient-to-r from-purple-900/90 to-pink-900/90 rounded-lg shadow-lg border border-pink-500/20 overflow-hidden transition-all duration-300"
          >
            <button *ngFor="let section of sections"
                    (click)="selectSection($event, section)"
                    class="w-full px-4 py-3 text-left text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:text-pink-400"
            >
              {{ section.toUpperCase() }}
            </button>
          </div>
        </div>

        <!-- Contact Button -->
        <button 
          (click)="toggleContactDropdown()"
          class="relative px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/50 to-pink-500/50 border border-pink-500/30 hover:from-purple-500/70 hover:to-pink-500/70 hover:border-pink-400/50 transition-all duration-300"
        >
          <span class="text-white font-semibold">
            HIRE ME
          </span>
        </button>

        <!-- Contact Dropdown -->
        <div *ngIf="isContactDropdownOpen" 
             class="absolute top-[90px] right-4 w-48 backdrop-blur-xl bg-gradient-to-r from-purple-900/90 to-pink-900/90 rounded-lg shadow-lg border border-pink-500/20 overflow-hidden"
        >
          <button *ngFor="let contact of contacts"
                  (click)="openLink(contact.url)"
                  class="group relative w-full px-4 py-3 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
          >
            <span class="text-white group-hover:text-pink-400 transition-all duration-300 flex items-center gap-2">
              {{ contact.name.toUpperCase() }}
            </span>
          </button>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent implements OnInit {
  currentSection = 'home';
  isDropdownOpen = false;
  sections = ['home', 'work', 'about'];
  isContactDropdownOpen = false;
  contacts = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile' },
    { name: 'GitHub', url: 'https://github.com/your-username' },
    { name: 'Email', url: 'mailto:your.email@example.com' }
  ];

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.updateCurrentSection();
    window.addEventListener('scroll', () => this.updateCurrentSection());
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleContactDropdown(): void {
    this.isContactDropdownOpen = !this.isContactDropdownOpen;
    if (this.isContactDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  selectSection(event: Event, section: string): void {
    event.preventDefault();
    this.currentSection = section;
    this.isDropdownOpen = false;
    
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 100; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  updateCurrentSection(): void {
    const sections = this.sections;
    const navbarHeight = 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          this.currentSection = section;
          break;
        }
      }
    }
  }

  openLink(url: string): void {
    window.open(url, '_blank');
    this.isContactDropdownOpen = false;
  }
}