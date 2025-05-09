import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-finances',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="finances-content">
      <header class="page-header">
        <h1>Financial Overview</h1>
        <div class="period-selector">
          <button class="active">Monthly</button>
          <button>Quarterly</button>
          <button>Yearly</button>
        </div>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Revenue</h3>
          <div class="stat-value">
            <span class="amount">$124,589</span>
            <span class="trend positive">+12.5%</span>
          </div>
          <p class="comparison">vs last month</p>
        </div>

        <div class="stat-card">
          <h3>Average Booking Value</h3>
          <div class="stat-value">
            <span class="amount">$1,890</span>
            <span class="trend positive">+5.3%</span>
          </div>
          <p class="comparison">vs last month</p>
        </div>

        <div class="stat-card">
          <h3>Pending Payments</h3>
          <div class="stat-value">
            <span class="amount">$12,490</span>
            <span class="trend negative">+8.4%</span>
          </div>
          <p class="comparison">vs last month</p>
        </div>
      </div>

      <div class="transactions-section">
        <h2>Recent Transactions</h2>
        <table class="transactions-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let transaction of recentTransactions">
              <td>{{transaction.id}}</td>
              <td>{{transaction.customer}}</td>
              <td>{{transaction.date}}</td>
              <td>{{transaction.amount | currency}}</td>
              <td><span class="status {{transaction.status.toLowerCase()}}">{{transaction.status}}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  styles: [`
    .finances-content {
      padding: 24px;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;

      h1 {
        font-size: 24px;
        font-weight: 600;
      }

      .period-selector {
        display: flex;
        gap: 8px;
        background: #f0f0f0;
        padding: 4px;
        border-radius: 8px;

        button {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          background: none;
          cursor: pointer;
          font-weight: 500;

          &.active {
            background: white;
            color: var(--primary);
          }
        }
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
    }

    .stat-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;

      h3 {
        margin: 0;
        font-size: 16px;
        color: #666;
      }

      .stat-value {
        margin: 16px 0;
        display: flex;
        align-items: baseline;
        gap: 12px;

        .amount {
          font-size: 32px;
          font-weight: 600;
          color: var(--primary);
          transition: color 0.3s ease;
        }

        .trend {
          font-size: 14px;
          font-weight: 500;

          &.positive { color: #1e8e3e; }
          &.negative { color: #d93025; }
        }
      }

      .comparison {
        margin: 0;
        font-size: 14px;
        color: #666;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      }
    }

    .transactions-section {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);

      h2 {
        margin: 0 0 24px;
        font-size: 20px;
      }

      .transactions-table {
        width: 100%;
        border-collapse: collapse;

        th, td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        th {
          font-weight: 500;
          color: #666;
        }

        .status {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;

          &.completed { background: #e6f4ea; color: #1e8e3e; }
          &.pending { background: #fef7e0; color: #b17900; }
          &.failed { background: #fce8e6; color: #d93025; }
        }
      }
    }

    @media (max-width: 768px) {
      .page-header {
        flex-direction: column;
        gap: 16px;
      }

      .period-selector {
        width: 100%;
        overflow-x: auto;
        
        button {
          flex: 1;
          white-space: nowrap;
        }
      }

      .transactions-table {
        display: block;
        overflow-x: auto;
        
        th, td {
          min-width: 120px;
        }
      }
    }
  `]
})
export class AdminFinancesComponent {
  recentTransactions = [
    {
      id: 'TRX001',
      customer: 'Emma Wilson',
      date: '2024-02-15',
      amount: 1299,
      status: 'COMPLETED'
    },
    {
      id: 'TRX002',
      customer: 'James Miller',
      date: '2024-02-14',
      amount: 1599,
      status: 'PENDING'
    },
    {
      id: 'TRX003',
      customer: 'Sophie Chen',
      date: '2024-02-13',
      amount: 2199,
      status: 'FAILED'
    }
  ];
} 