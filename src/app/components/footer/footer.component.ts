import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="relative w-full py-12 overflow-hidden">
      <!-- Gradient overlay -->
      <div class="absolute inset-0 backdrop-blur-xl bg-gradient-to-r from-purple-900/90 to-pink-900/90 border-t border-pink-500/20"></div>
      
      <!-- Content -->
      <div class="relative max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 items-center">
          <!-- Brand -->
          <div class="text-center md:text-left">
            <h2 class="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jonah Carpenter
            </h2>
            <p class="mt-2 text-gray-400">Full Stack Developer</p>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center gap-6">
            <a *ngFor="let link of socialLinks" 
               [href]="link.url" 
               target="_blank"
               class="relative px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/30 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-pink-400/50 transition-all duration-300"
            >
              <span class="text-white">
                {{ link.name }}
              </span>
            </a>
          </div>

          <!-- Copyright -->
          <div class="text-center md:text-right text-gray-400">
            <p>&copy; {{ currentYear }} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile' },
    { name: 'GitHub', url: 'https://github.com/your-username' },
    { name: 'Email', url: 'mailto:your.email@example.com' }
  ];
}
