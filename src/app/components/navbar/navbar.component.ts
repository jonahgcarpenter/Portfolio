import { Component, OnInit } from '@angular/core';
import { ViewportScroller, CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="w-full h-[100px] fixed top-0 backdrop-blur-xl bg-gradient-to-r from-purple-900/90 to-pink-900/90 border-b border-pink-500/20 z-50 transition-all duration-300">
      <div class="h-full max-w-6xl mx-auto flex justify-between items-center px-6">
        <!-- Logo/Brand -->
        <h1 class="text-xl font-bold">
          <span class="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Jonah Carpenter
          </span>
        </h1>

        <!-- Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <button *ngFor="let section of sections"
                  (click)="selectSection($event, section)"
                  [class]="'px-4 py-2 rounded-lg transition-colors text-white ' + 
                    (currentSection === section ? 'bg-purple-500' : 'border border-pink-500 hover:bg-pink-500/10')"
          >
            {{ section.toUpperCase() }}
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="flex md:hidden relative">
          <button 
            (click)="toggleDropdown()"
            class="px-4 py-2 rounded-lg transition-colors border border-pink-500 hover:bg-pink-500/10"
          >
            <span class="text-white">
              {{ currentSection.toUpperCase() }}
            </span>
          </button>

          <div *ngIf="isDropdownOpen" 
               class="absolute right-0 mt-2 w-48 backdrop-blur-xl bg-gradient-to-r from-purple-900/90 to-pink-900/90 rounded-lg shadow-lg border border-pink-500/20 overflow-hidden"
          >
            <button *ngFor="let section of sections"
                    (click)="selectSection($event, section)"
                    [class]="'w-full px-4 py-2 text-left text-white transition-colors ' + 
                      (currentSection === section ? 'bg-purple-500' : 'hover:bg-pink-500/10')"
            >
              {{ section.toUpperCase() }}
            </button>
          </div>
        </div>

        <!-- Contact Button -->
        <button 
          (click)="toggleContactDropdown()"
          [class]="'px-4 py-2 rounded-lg transition-colors ' + 
            (isContactDropdownOpen ? 'bg-purple-500' : 'border border-pink-500 hover:bg-pink-500/10')"
        >
          <span class="text-white">HIRE ME</span>
        </button>

        <!-- Contact Dropdown -->
        <div *ngIf="isContactDropdownOpen" 
             class="absolute top-[90px] right-4 w-48 backdrop-blur-xl bg-gradient-to-r from-purple-900/90 to-pink-900/90 rounded-lg shadow-lg border border-pink-500/20 overflow-hidden"
        >
          <button *ngFor="let contact of contacts"
                  (click)="openLink(contact.url)"
                  class="w-full px-4 py-2 text-left text-white transition-colors hover:bg-pink-500/10"
          >
            {{ contact.name.toUpperCase() }}
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
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jonah-carpenter-aa2644264/' },
    { name: 'GitHub', url: 'https://github.com/jonahgcarpenter' },
    { name: 'Email', url: 'mailto:jonahgcarpenter@gmail.com' }
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