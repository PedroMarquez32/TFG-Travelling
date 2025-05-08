import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="app-container">
      <mat-toolbar>
        <span>TravelDreams</span>
        <span class="spacer"></span>
        <a mat-button routerLink="/destinations">Destinos</a>
        <a mat-button routerLink="/bookings">Mis Reservas</a>
        <a mat-button routerLink="/login">Login</a>
      </mat-toolbar>

      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    mat-toolbar {
      background: #4DA8DA;
      color: white;
    }

    .spacer {
      flex: 1 1 auto;
    }

    main {
      flex: 1;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      box-sizing: border-box;
    }

    a {
      color: white;
      text-decoration: none;
    }
  `]
})
export class AppComponent { }
