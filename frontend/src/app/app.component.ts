import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <div class="router-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .router-container {
      background: var(--cream);
      min-height: 100vh;
    }
  `]
})
export class AppComponent {}
