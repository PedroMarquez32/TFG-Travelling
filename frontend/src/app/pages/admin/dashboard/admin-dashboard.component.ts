import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard">
      <header class="dashboard-header">
        <div class="header-left">
          <h1>Dashboard</h1>
          <p>Welcome back, John! Here's what's happening today.</p>
        </div>
        <div class="header-actions">
          <div class="search-bar">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search...">
          </div>
          <a routerLink="/" class="back-button">
            <i class="fas fa-home"></i>
            <span>Back to Site</span>
          </a>
        </div>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <h3>Total Users</h3>
            <div class="stat-icon blue">
              <i class="fas fa-users"></i>
            </div>
          </div>
          <div class="stat-value">12,486</div>
          <div class="stat-trend positive">
            <span>+12.5%</span> vs last month
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <h3>Active Bookings</h3>
            <div class="stat-icon green">
              <i class="fas fa-calendar-check"></i>
            </div>
          </div>
          <div class="stat-value">1,843</div>
          <div class="stat-trend positive">
            <span>+8.2%</span> vs last month
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <h3>Monthly Revenue</h3>
            <div class="stat-icon coral">
              <i class="fas fa-dollar-sign"></i>
            </div>
          </div>
          <div class="stat-value">$248,320</div>
          <div class="stat-trend positive">
            <span>+18.3%</span> vs last month
          </div>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="chart-section">
          <div class="section-header">
            <div class="section-title">
              <i class="fas fa-chart-line"></i>
              <h2>Bookings Overview</h2>
            </div>
            <select>
              <option>Last 30 days</option>
              <option>Last 60 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div class="chart">
            <!-- Chart will be added here -->
          </div>
        </div>

        <div class="popular-destinations">
          <div class="section-header">
            <div class="section-title">
              <i class="fas fa-map-marker-alt"></i>
              <h2>Popular Destinations</h2>
            </div>
            <a href="#" class="view-all">
              View All
              <i class="fas fa-arrow-right"></i>
            </a>
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
                  <div class="destination-info">
                    <img src="assets/images/santorini.jpg" alt="Santorini">
                    <span>Santorini, Greece</span>
                  </div>
                </td>
                <td>342</td>
                <td>$498,200</td>
                <td>4.9 ⭐</td>
              </tr>
              <!-- Más destinos aquí -->
            </tbody>
          </table>
        </div>
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
            <div class="activity-content">
              <p>New user registered</p>
              <span>Emma Thompson created a new account</span>
            </div>
            <span class="activity-time">30 min ago</span>
          </div>
          <!-- Más actividades aquí -->
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 32px;
      background: #f8f9fa;
      max-width: 1600px;
      margin: 0 auto;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;

      .header-left {
        h1 {
          font-size: 28px;
          font-weight: 600;
          color: #1a2233;
          margin: 0;
        }

        p {
          color: #64748b;
          margin: 8px 0 0;
          font-size: 16px;
        }
      }
    }

    .header-actions {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .back-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      color: #64748b;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        background: #f8fafc;
        color: #1a2233;
      }

      i {
        font-size: 16px;
      }

      span {
        font-size: 14px;
        font-weight: 500;
      }
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 12px;

      i {
        color: #64748b;
        font-size: 20px;
      }

      h2 {
        font-size: 20px;
        color: #1a2233;
        margin: 0;
      }
    }

    .view-all {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #3b82f6;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;

      i {
        font-size: 12px;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 24px;
    }

    .stat-card {
      background: white;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      height: 100%;
      min-height: 160px;

      .stat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;

        h3 {
          color: #64748b;
          font-size: 16px;
          margin: 0;
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;

          i {
            color: white;
            font-size: 20px;
          }

          &.blue { background: #3b82f6; }
          &.green { background: #10b981; }
          &.coral { background: #f43f5e; }
        }
      }

      .stat-value {
        font-size: 32px;
        font-weight: 600;
        color: #1e293b;
        margin-bottom: 8px;
      }

      .stat-trend {
        font-size: 14px;
        color: #64748b;

        span {
          color: #10b981;
          font-weight: 500;
        }
      }
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    .chart-section, .popular-destinations {
      background: white;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      height: 100%;
      min-height: 400px;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      h2 {
        font-size: 18px;
        color: #1e293b;
        margin: 0;
      }

      select {
        padding: 8px 12px;
        border: 1px solid #e2e8f0;
        border-radius: 6px;
        color: #64748b;
      }
    }

    .chart {
      height: 350px;
      background: #f8fafc;
      border-radius: 12px;
      margin-top: 24px;
    }

    @media (max-width: 1400px) {
      .dashboard {
        padding: 24px;
      }

      .dashboard-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }

      .header-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .search-bar {
        width: 100%;
      }
    }
  `]
})
export class AdminDashboardComponent {} 