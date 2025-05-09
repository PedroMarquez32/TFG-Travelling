import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="admin-layout">
      <aside class="sidebar">
        <div class="brand">
          <img src="assets/images/logo.svg" alt="TravelDream" class="logo">
          <span>Admin Dashboard</span>
        </div>
        
        <nav class="nav-menu">
          <a routerLink="/admin/dashboard" routerLinkActive="active">
            <i class="fas fa-th-large"></i>
            <span>Dashboard</span>
          </a>
          <a routerLink="/admin/users" routerLinkActive="active">
            <i class="fas fa-users"></i>
            <span>Users</span>
          </a>
          <a routerLink="/admin/destinations" routerLinkActive="active">
            <i class="fas fa-map-marker-alt"></i>
            <span>Destinations</span>
          </a>
          <a routerLink="/admin/bookings" routerLinkActive="active">
            <i class="fas fa-calendar"></i>
            <span>Bookings</span>
          </a>
          <a routerLink="/admin/finances" routerLinkActive="active">
            <i class="fas fa-dollar-sign"></i>
            <span>Finances</span>
          </a>
          <a routerLink="/admin/reviews" routerLinkActive="active">
            <i class="fas fa-heart"></i>
            <span>Reviews</span>
          </a>
          <a routerLink="/admin/settings" routerLinkActive="active">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </a>
        </nav>

        <div class="user-profile">
          <img src="assets/images/admin-avatar.png" alt="John Doe">
          <div class="user-info">
            <h4>John Doe</h4>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
  styles: [`
    .admin-layout {
      display: flex;
      min-height: 100vh;
    }

    .sidebar {
      width: 250px;
      background: #1a2233;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      color: white;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);

      .logo {
        width: 32px;
        height: 32px;
      }

      span {
        font-size: 1.125rem;
        font-weight: 600;
      }
    }

    .nav-menu {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        color: #8896ab;
        text-decoration: none;
        border-radius: 0.5rem;
        transition: all 0.2s;

        i {
          font-size: 1.25rem;
          width: 1.5rem;
        }

        &:hover, &.active {
          background: rgba(255,255,255,0.1);
          color: white;
        }
      }
    }

    .user-profile {
      padding-top: 1.5rem;
      margin-top: 1.5rem;
      border-top: 1px solid rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      gap: 0.75rem;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .user-info {
        h4 {
          margin: 0;
          font-size: 0.875rem;
        }

        span {
          font-size: 0.75rem;
          opacity: 0.7;
        }
      }
    }

    .main-content {
      flex: 1;
      background: #f8fafc;
      overflow-y: auto;
    }
  `]
})
export class AdminLayoutComponent {} 