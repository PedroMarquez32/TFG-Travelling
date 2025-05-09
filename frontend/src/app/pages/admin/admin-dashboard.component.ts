import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-content">
      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-info">
            <h3>Total Users</h3>
            <div class="stat-value">
              <span class="number">12,486</span>
              <span class="trend positive">+12.5% last month</span>
            </div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-info">
            <h3>Active Bookings</h3>
            <div class="stat-value">
              <span class="number">1,843</span>
              <span class="trend positive">+8.2% last month</span>
            </div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-info">
            <h3>Monthly Revenue</h3>
            <div class="stat-value">
              <span class="number">$248,320</span>
              <span class="trend positive">+18.3% last month</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="activity-section">
        <div class="section-header">
          <h3>Recent Activity</h3>
          <button class="refresh-btn">🔄</button>
        </div>
        <div class="activity-list">
          <div class="activity-item">
            <span class="activity-icon">👤</span>
            <div class="activity-details">
              <p>New user registered</p>
              <span class="activity-time">15 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-content {
      padding: 24px;
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
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);

      h3 {
        font-size: 16px;
        color: #666;
        margin-bottom: 16px;
      }

      .stat-value {
        .number {
          font-size: 32px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .trend {
          display: block;
          font-size: 14px;
          margin-top: 8px;

          &.positive {
            color: #4caf50;
          }
        }
      }
    }

    .activity-section {
      background: white;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);

      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;

        h3 {
          font-size: 18px;
        }

        .refresh-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
        }
      }

      .activity-list {
        .activity-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid #e0e0e0;

          .activity-icon {
            font-size: 24px;
          }

          .activity-details {
            flex: 1;

            p {
              margin: 0;
              color: var(--text-dark);
            }

            .activity-time {
              font-size: 12px;
              color: #666;
            }
          }
        }
      }
    }
  `]
})
export class AdminDashboardComponent {} 