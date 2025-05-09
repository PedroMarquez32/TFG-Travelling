import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { fadeAnimation } from './shared/animations/route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="router-container">
      <router-outlet></router-outlet>
    </div>
  `,
  animations: [fadeAnimation],
  styles: [`
    .router-container {
      background: var(--cream);
      min-height: 100vh;
    }
  `]
})
export class AppComponent {
  // No necesitamos el método getRouteState aquí
}
