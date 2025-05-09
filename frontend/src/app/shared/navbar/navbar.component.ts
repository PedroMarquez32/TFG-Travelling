import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('navAnimation', [
      transition(':enter', [
        query('.menu-items a, .auth-buttons button', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, [
            animate('400ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ],
  styles: [`
    .nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: var(--primary);
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 4px;
      transition: all 0.2s ease;
      width: fit-content;

      &:hover {
        background: rgba(255,255,255,0.05);
        transform: translateY(-1px);
      }

      .travel-dream {
        font-size: 22px;
        font-weight: 600;
        color: white;
        white-space: nowrap;
        
        .dream {
          color: var(--secondary);
        }
      }
    }
  `]
})
export class NavbarComponent {
  // Por ahora mantendremos una estructura simple
}
