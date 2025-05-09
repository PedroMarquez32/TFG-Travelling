import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="admin-layout">
      <aside class="sidebar">
        <div class="brand" routerLink="/">
          <img src="assets/images/logo.svg" alt="TravelDream" class="logo">
          <span class="brand-name">TravelDream</span>
        </div>
        
        <nav class="nav-menu">
          <a routerLink="/admin/dashboard" routerLinkActive="active" class="nav-item">
            <span class="icon">📊</span>
            Dashboard
          </a>
          <a routerLink="/admin/users" routerLinkActive="active" class="nav-item">
            <span class="icon">👥</span>
            Users
          </a>
          <a routerLink="/admin/destinations" routerLinkActive="active" class="nav-item">
            <span class="icon">🌍</span>
            Destinations
          </a>
          <a routerLink="/admin/bookings" routerLinkActive="active" class="nav-item">
            <span class="icon">📅</span>
            Bookings
          </a>
          <a routerLink="/admin/finances" routerLinkActive="active" class="nav-item">
            <span class="icon">💰</span>
            Finances
          </a>
          <a routerLink="/admin/reviews" routerLinkActive="active" class="nav-item">
            <span class="icon">⭐</span>
            Reviews
          </a>
          <a routerLink="/admin/settings" routerLinkActive="active" class="nav-item">
            <span class="icon">⚙️</span>
            Settings
          </a>
        </nav>

        <div class="user-info">
          <img src="assets/images/admin-avatar.png" alt="Admin">
          <div class="admin-info">
            <h3>John Doe</h3>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .admin-layout {
      display: flex;
      min-height: 100vh;
    }

    .sidebar {
      width: 280px;
      background: var(--primary);
      padding: 24px;
      display: flex;
      flex-direction: column;
      color: var(--text-light);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 48px;
      
      img {
        width: 32px;
        height: 32px;
      }

      h1 {
        font-size: 20px;
        font-weight: 600;
      }
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;

      a {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        color: var(--text-light);
        text-decoration: none;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:hover, &.active {
          background: rgba(255, 255, 255, 0.1);
        }

        i {
          font-size: 20px;
        }
      }
    }

    .admin-profile {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .admin-info {
        h3 {
          font-size: 16px;
          margin: 0;
        }

        span {
          font-size: 14px;
          opacity: 0.7;
        }
      }
    }

    .content {
      flex: 1;
      padding: 24px;
      background: var(--cream);
    }
  `]
})
export class AdminComponent {} 