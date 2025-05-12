import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <div class="header-title">
          <h1>Dashboard</h1>
          <p>Welcome back, John! Here's what's happening today.</p>
        </div>
        <div class="header-actions">
          <div class="search-bar">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search...">
          </div>
          <div class="header-icons">
            <i class="fas fa-bell"></i>
            <i class="fas fa-question-circle"></i>
          </div>
        </div>
      </div>

      <div class="stats-cards">
        <div class="stat-card">
          <h3>Total Users</h3>
          <div class="stat-content">
            <div class="stat-info">
              <div class="stat-value">12,486</div>
              <div class="stat-change positive">+12.5% vs last month</div>
            </div>
            <div class="stat-icon users">
              <i class="fas fa-users"></i>
            </div>
          </div>
        </div>

        <div class="stat-card">
          <h3>Active Bookings</h3>
          <div class="stat-content">
            <div class="stat-info">
              <div class="stat-value">1,843</div>
              <div class="stat-change positive">+8.2% vs last month</div>
            </div>
            <div class="stat-icon bookings">
              <i class="fas fa-calendar-check"></i>
            </div>
          </div>
        </div>

        <div class="stat-card">
          <h3>Monthly Revenue</h3>
          <div class="stat-content">
            <div class="stat-info">
              <div class="stat-value">$248,320</div>
              <div class="stat-change positive">+18.3% vs last month</div>
            </div>
            <div class="stat-icon revenue">
              <i class="fas fa-dollar-sign"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="dashboard-content">
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

        <div class="destinations-section">
          <div class="section-header">
            <h2>Popular Destinations</h2>
            <a href="#" class="view-all">View All</a>
          </div>
          <div class="destinations-table">
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
            <div class="activity-icon">
              <i class="fas fa-user"></i>
            </div>
            <div class="activity-content">
              <p>New user registered</p>
              <span>Emma Thompson created a new account</span>
            </div>
            <span class="activity-time">10 min ago</span>
          </div>
          <!-- Más actividades aquí -->
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 24px;
      height: calc(100vh - 48px);
      overflow-y: auto;
      background: #f8f9fa;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .header-title h1 {
      margin: 0;
      font-size: 24px;
      color: #1a2233;
    }

    .header-title p {
      margin: 4px 0 0;
      color: #64748b;
    }

    .header-actions {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .search-bar {
      display: flex;
      align-items: center;
      background: white;
      border-radius: 8px;
      padding: 8px 16px;
      gap: 8px;
      
      input {
        border: none;
        outline: none;
        width: 200px;
      }
    }

    .stats-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 24px;
    }

    .stat-card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      
      h3 {
        margin: 0;
        color: #64748b;
        font-size: 14px;
      }

      .stat-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
      }

      .stat-value {
        font-size: 28px;
        font-weight: 600;
        color: #1a2233;
      }

      .stat-change {
        font-size: 14px;
        &.positive { color: #10b981; }
      }

      .stat-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        i {
          color: white;
          font-size: 20px;
        }

        &.users { background: #3b82f6; }
        &.bookings { background: #10b981; }
        &.revenue { background: #f43f5e; }
      }
    }

    .dashboard-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    .chart-section, .destinations-section {
      background: white;
      border-radius: 12px;
      padding: 20px;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h2 {
        margin: 0;
        font-size: 18px;
        color: #1a2233;
      }
    }

    .destinations-table {
      table {
        width: 100%;
        border-collapse: collapse;
        
        th, td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
        }

        th {
          color: #64748b;
          font-weight: 500;
        }
      }
    }

    .destination-info {
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

    .recent-activity {
      background: white;
      border-radius: 12px;
      padding: 20px;

      .activity-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .activity-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px;
        border-radius: 8px;
        transition: background 0.2s;

        &:hover {
          background: #f8f9fa;
        }
      }
    }

    @media (max-width: 1200px) {
      .dashboard-content {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .dashboard-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      .header-actions {
        width: 100%;
      }

      .search-bar {
        flex: 1;
        input {
          width: 100%;
        }
      }

      .stats-cards {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AdminDashboardComponent {} 