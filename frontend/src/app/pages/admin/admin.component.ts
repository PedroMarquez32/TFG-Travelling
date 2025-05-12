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
        <div class="brand">
          <img src="assets/images/logo.svg" alt="TravelDream" class="logo">
          <h1>Admin Dashboard</h1>
        </div>
        
        <nav class="nav-menu">
          <a routerLink="dashboard" routerLinkActive="active">
            <i class="fas fa-th-large"></i>
            Dashboard
          </a>
          <a routerLink="users" routerLinkActive="active">
            <i class="fas fa-users"></i>
            Users
          </a>
          <a routerLink="destinations" routerLinkActive="active">
            <i class="fas fa-map-marker-alt"></i>
            Destinations
          </a>
          <a routerLink="bookings" routerLinkActive="active">
            <i class="fas fa-calendar"></i>
            Bookings
          </a>
          <a routerLink="finances" routerLinkActive="active">
            <i class="fas fa-dollar-sign"></i>
            Finances
          </a>
          <a routerLink="reviews" routerLinkActive="active">
            <i class="fas fa-heart"></i>
            Reviews
          </a>
          <a routerLink="settings" routerLinkActive="active">
            <i class="fas fa-cog"></i>
            Settings
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
  styles: [`
    .admin-layout {
      display: flex;
      min-height: 100vh;
    }

    .sidebar {
      width: 280px;
      background: #1a1c2e;
      color: white;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 32px;

      .brand {
        display: flex;
        align-items: center;
        gap: 12px;

        .logo {
          width: 32px;
          height: 32px;
        }

        h1 {
          font-size: 20px;
          margin: 0;
        }
      }

      .nav-menu {
        display: flex;
        flex-direction: column;
        gap: 8px;

        a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: #8a94a6;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;

          i {
            width: 20px;
            text-align: center;
          }

          &:hover {
            background: rgba(255,255,255,0.1);
            color: white;
          }

          &.active {
            background: #4da8da;
            color: white;
          }
        }
      }

      .user-profile {
        margin-top: auto;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        border-top: 1px solid rgba(255,255,255,0.1);

        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
        }

        .user-info {
          h4 {
            margin: 0;
            font-size: 14px;
          }

          span {
            font-size: 12px;
            color: #8a94a6;
          }
        }
      }
    }

    .main-content {
      flex: 1;
      padding: 24px;
      background: #f8f9fa;
    }
  `]
})
export class AdminComponent {
  // ... cualquier lógica del componente si es necesaria ...
} 