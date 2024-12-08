import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav>
        <ul>
          <li><a href="#home" (click)="scrollToSection($event, 'home')">Home</a></li>
          <li><a href="#work" (click)="scrollToSection($event, 'work')">Work</a></li>
          <li><a href="#about" (click)="scrollToSection($event, 'about')">About</a></li>
        </ul>
    </nav>
  `,
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}