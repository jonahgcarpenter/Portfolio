import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div>
        <a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a> |
        <a href="https://github.com/your-username" target="_blank">GitHub</a> |
        <a href="mailto:your.email@example.com">Email</a>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {

}
