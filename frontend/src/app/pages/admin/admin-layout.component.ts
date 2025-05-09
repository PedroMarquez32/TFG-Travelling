import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="admin-dashboard">
      <aside class="sidebar">
        <div class="brand">
          <img src="assets/images/logo.svg" alt="TravelDream" class="logo">
          <span>TravelDream</span>
          <small>Admin Dashboard</small>
        </div>

        <nav class="nav-menu">
          <a routerLink="/admin" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item">
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
          <img src="assets/images/avatar.jpg" alt="Admin" class="avatar">
          <div class="user-details">
            <span class="name">John Doe</span>
            <span class="role">Administrator</span>
          </div>
        </div>
      </aside>

      <main class="main-content">
        <header class="top-bar">
          <div class="page-title">
            Welcome back, here's what's happening today.
          </div>
          <div class="top-bar-actions">
            <div class="search-bar">
              <input type="text" placeholder="Search..." class="search-input">
            </div>
            <button class="notification-btn">🔔</button>
            <button class="settings-btn">⚙️</button>
          </div>
        </header>

        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .admin-dashboard {
      display: flex;
      min-height: 100vh;
      background: #f8f9fa;
    }

    .sidebar {
      width: 280px;
      background: var(--primary);
      color: white;
      padding: 24px;
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100vh;

      .brand {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-bottom: 24px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        margin-bottom: 24px;

        span {
          font-size: 20px;
          font-weight: 600;
        }

        small {
          font-size: 12px;
          opacity: 0.7;
        }
      }

      .nav-menu {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;

          &:hover, &.active {
            background: rgba(255,255,255,0.1);
          }

          .icon {
            font-size: 20px;
          }
        }
      }

      .user-info {
        margin-top: auto;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        border-top: 1px solid rgba(255,255,255,0.1);

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .user-details {
          display: flex;
          flex-direction: column;

          .name {
            font-weight: 600;
          }

          .role {
            font-size: 12px;
            opacity: 0.7;
          }
        }
      }
    }

    .main-content {
      flex: 1;
      margin-left: 280px;
      padding: 24px;

      .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;

        .page-title {
          font-size: 18px;
          color: #666;
        }

        .top-bar-actions {
          display: flex;
          align-items: center;
          gap: 16px;

          .search-bar {
            position: relative;

            .search-input {
              width: 240px;
              padding: 8px 16px;
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              font-size: 14px;

              &:focus {
                outline: none;
                border-color: var(--secondary);
              }
            }
          }

          button {
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            padding: 8px;
            border-radius: 50%;
            transition: all 0.3s ease;

            &:hover {
              background: rgba(0,0,0,0.05);
            }
          }
        }
      }
    }
  `]
})
export class AdminLayoutComponent {} 