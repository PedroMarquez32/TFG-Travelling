import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin',
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
            Dashboard
          </a>
          <a routerLink="/admin/users" routerLinkActive="active">
            <i class="fas fa-users"></i>
            Users
          </a>
          <a routerLink="/admin/destinations" routerLinkActive="active">
            <i class="fas fa-map-marker-alt"></i>
            Destinations
          </a>
          <a routerLink="/admin/bookings" routerLinkActive="active">
            <i class="fas fa-calendar"></i>
            Bookings
          </a>
          <a routerLink="/admin/finances" routerLinkActive="active">
            <i class="fas fa-dollar-sign"></i>
            Finances
          </a>
          <a routerLink="/admin/reviews" routerLinkActive="active">
            <i class="fas fa-heart"></i>
            Reviews
          </a>
          <a routerLink="/admin/settings" routerLinkActive="active">
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
        <header class="top-bar">
          <div class="page-title">
            <h1>Dashboard</h1>
            <p>Welcome back, John! Here's what's happening today.</p>
          </div>
          <div class="header-actions">
            <div class="search-bar">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search...">
            </div>
            <button class="notification-btn">
              <i class="fas fa-bell"></i>
            </button>
            <button class="settings-btn">
              <i class="fas fa-cog"></i>
            </button>
          </div>
        </header>

        <div class="dashboard-content">
          <div class="stats-grid">
            <div class="stat-card">
              <h3>Total Users</h3>
              <div class="stat-value">12,486</div>
              <div class="stat-trend positive">
                <span>+12.5%</span> vs last month
              </div>
            </div>

            <div class="stat-card">
              <h3>Active Bookings</h3>
              <div class="stat-value">1,843</div>
              <div class="stat-trend positive">
                <span>+8.2%</span> vs last month
              </div>
            </div>

            <div class="stat-card">
              <h3>Monthly Revenue</h3>
              <div class="stat-value">$248,320</div>
              <div class="stat-trend positive">
                <span>+18.3%</span> vs last month
              </div>
            </div>
          </div>

          <div class="dashboard-grid">
            <div class="chart-section">
              <div class="section-header">
                <h2>Bookings Overview</h2>
                <select>
                  <option>Last 30 days</option>
                  <option>Last 60 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div class="chart">
                <!-- Aquí irá el gráfico -->
              </div>
            </div>

            <div class="popular-destinations">
              <div class="section-header">
                <h2>Popular Destinations</h2>
                <a href="#" class="view-all">View All</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Destination</th>
                    <th>Bookings</th>
                    <th>Revenue</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div class="destination-cell">
                        <img src="assets/images/santorini.jpg" alt="Santorini">
                        <span>Santorini, Greece</span>
                      </div>
                    </td>
                    <td>342</td>
                    <td>$498,200</td>
                    <td>4.9</td>
                  </tr>
                  <!-- Más filas aquí -->
                </tbody>
              </table>
            </div>

            <div class="recent-activity">
              <div class="section-header">
                <h2>Recent Activity</h2>
                <button class="refresh-btn">
                  <i class="fas fa-sync"></i>
                </button>
              </div>
              <div class="activity-list">
                <div class="activity-item">
                  <div class="activity-icon user">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="activity-details">
                    <p>New user registered</p>
                    <span>Emma Thompson created a new account</span>
                  </div>
                  <span class="activity-time">30 min ago</span>
                </div>
                <!-- Más actividades aquí -->
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .admin-layout {
      display: flex;
      min-height: 100vh;
      background: #f8f9fa;
    }

    .sidebar {
      width: 260px;
      background: #1a2233;
      padding: 24px;
      display: flex;
      flex-direction: column;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 40px;
      
      img {
        width: 32px;
        height: 32px;
      }

      span {
        color: white;
        font-size: 18px;
        font-weight: 600;
      }
    }

    .nav-menu {
      flex: 1;
      
      a {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #8a94a6;
        text-decoration: none;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 8px;
        transition: all 0.3s ease;

        i {
          width: 20px;
        }

        &:hover, &.active {
          background: rgba(255,255,255,0.1);
          color: white;
        }
      }
    }

    .main-content {
      flex: 1;
      padding: 24px;
      overflow-y: auto;
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 32px;
    }

    .stat-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);

      h3 {
        color: #8a94a6;
        font-size: 14px;
        margin-bottom: 8px;
      }

      .stat-value {
        font-size: 32px;
        font-weight: 600;
        color: #1a2233;
        margin-bottom: 8px;
      }

      .stat-trend {
        font-size: 14px;
        color: #8a94a6;

        &.positive span {
          color: #10b981;
        }
      }
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 24px;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      h2 {
        font-size: 18px;
        color: #1a2233;
      }
    }

    .popular-destinations {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);

      table {
        width: 100%;
        border-collapse: collapse;

        th, td {
          padding: 12px;
          text-align: left;
        }

        th {
          color: #8a94a6;
          font-weight: 500;
          border-bottom: 1px solid #edf2f7;
        }

        .destination-cell {
          display: flex;
          align-items: center;
          gap: 12px;

          img {
            width: 32px;
            height: 32px;
            border-radius: 6px;
            object-fit: cover;
          }
        }
      }
    }

    .recent-activity {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);

      .activity-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px 0;
        border-bottom: 1px solid #edf2f7;

        .activity-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e5e7eb;

          &.user {
            background: #dbeafe;
            color: #3b82f6;
          }
        }

        .activity-details {
          flex: 1;

          p {
            margin: 0;
            color: #1a2233;
          }

          span {
            font-size: 14px;
            color: #8a94a6;
          }
        }

        .activity-time {
          font-size: 14px;
          color: #8a94a6;
        }
      }
    }
  `]
})
export class AdminComponent {} 