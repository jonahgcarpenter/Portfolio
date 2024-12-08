import { Component, OnInit } from '@angular/core';
import { ViewportScroller, CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <div>
        <button (click)="toggleDropdown()">
          {{ currentSection.toUpperCase() }}
        </button>
        
        <div *ngIf="isDropdownOpen">
          <button 
            *ngFor="let section of sections"
            (click)="selectSection($event, section)"
          >
            {{ section.toUpperCase() }}
          </button>
        </div>
      </div>
      <p (click)="scrollToSection($event, 'hire')">
        HIRE ME
      </p>
    </nav>
  `,
})
export class NavbarComponent implements OnInit {
  currentSection = 'home';
  isDropdownOpen = false;
  sections = ['home', 'work', 'about'];

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.setOffset([0, 70]); // Adjust offset if needed
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectSection(event: Event, section: string): void {
    this.currentSection = section;
    this.isDropdownOpen = false;
    this.scrollToSection(event, section);
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.viewportScroller.scrollToAnchor(sectionId);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }
}