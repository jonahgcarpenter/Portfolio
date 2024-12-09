import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen text-white py-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div class="flex-1 space-y-6">
            <h1 class="text-4xl md:text-6xl font-bold leading-tight">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Full Stack / Software Developer
              </span>
            </h1>
            <p class="text-xl text-gray-300">
              Building digital experiences with code and creativity
            </p>
            <div class="flex gap-4">
              <button 
                (click)="copyEmail()" 
                class="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition duration-300"
              >
                {{ buttonText }}
              </button>
              <a href="#projects" class="px-6 py-3 border border-pink-500 hover:bg-pink-500/10 rounded-lg font-semibold transition duration-300">
                View Work
              </a>
            </div>
          </div>
          <div class="relative w-full md:w-1/2">
            <div class="aspect-square rounded-full overflow-hidden border-4 border-pink-500/30 shadow-xl shadow-purple-500/20">
              <img 
                src="profilepic.jpg" 
                alt="Profile Picture" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="mt-32 space-y-8">
          <h2 class="text-3xl font-bold">About Me</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <p class="text-gray-300 leading-relaxed">
                Hi there! I'm a dedicated Full Stack Developer with a passion for creating efficient and scalable web applications. 
                My journey in software development started with a curiosity for problem-solving and has evolved into a professional 
                career where I get to build innovative solutions every day.
              </p>
              <p class="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div class="bg-purple-800/50 rounded-xl p-6 space-y-4">
              <h3 class="text-xl font-semibold text-pink-400">Skills</h3>
              <ul class="grid grid-cols-2 gap-4">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Full Stack Development
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Software Developement
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Database Management
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Networking & Security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  buttonText = 'Copy My Email!';
  private email = 'jonahgcarpenter@gmail.com';

  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.email);
      this.buttonText = 'Copied To Clipboard!';
      setTimeout(() => {
        this.buttonText = 'Copy My Email!';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }
}
