import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, WorkComponent, AboutComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900">
      <app-navbar />
      <main style="padding-top: 64px;">
        <app-home />
        <app-work />
        <app-about />
      </main>
      <app-footer />
    </div>
  `
})
export class AppComponent {}
