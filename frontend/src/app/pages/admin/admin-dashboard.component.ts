import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-content">
      <div class="page-title">
        <h1>Dashboard</h1>
        <p>Welcome back, John! Here's what's happening today.</p>
      </div>

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
                <td>4.9 ⭐</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div class="destination-cell">
                    <img src="assets/images/bali.jpg" alt="Bali">
                    <span>Bali, Indonesia</span>
                  </div>
                </td>
                <td>298</td>
                <td>$357,400</td>
                <td>4.8 ⭐</td>
              </tr>
              <!-- Más destinos aquí -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-content {
      padding: 24px;
      background: var(--cream);
    }

    .page-title {
      margin-bottom: 32px;

      h1 {
        font-size: 32px;
        margin: 0 0 8px 0;
        color: var(--text-dark);
      }

      p {
        color: #666;
        margin: 0;
      }
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
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);

      h3 {
        font-size: 16px;
        color: #666;
        margin: 0 0 16px 0;
      }

      .stat-value {
        font-size: 32px;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 8px;
      }

      .stat-trend {
        font-size: 14px;
        color: #666;

        &.positive {
          span {
            color: #10B981;
          }
        }
      }
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 24px;
    }

    .chart-section, .popular-destinations {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      h2 {
        font-size: 18px;
        color: var(--text-dark);
        margin: 0;
      }

      .view-all {
        color: var(--secondary);
        text-decoration: none;
        font-size: 14px;
      }

      select {
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        color: #666;
      }
    }

    .chart {
      height: 300px;
      // Estilos para el gráfico
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #eee;
      }

      th {
        color: #666;
        font-weight: 500;
        font-size: 14px;
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

        span {
          color: var(--text-dark);
        }
      }
    }

    @media (max-width: 1024px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AdminDashboardComponent {} 
export class AdminDashboardComponent {} 