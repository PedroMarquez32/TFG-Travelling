import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bookings-content">
      <header class="page-header">
        <h1>Bookings Management</h1>
        <div class="header-actions">
          <button class="filter-btn">Filter by Status</button>
          <button class="export-btn">Export Data</button>
        </div>
      </header>

      <div class="bookings-grid">
        <div class="booking-card" *ngFor="let booking of bookings">
          <div class="booking-header">
            <span class="booking-id">#{{booking.id}}</span>
            <span class="status {{booking.status.toLowerCase()}}">{{booking.status}}</span>
          </div>
          <div class="booking-details">
            <div class="customer-info">
              <img [src]="booking.customerAvatar" alt="Customer avatar">
              <div>
                <h3>{{booking.customerName}}</h3>
                <span>{{booking.email}}</span>
              </div>
            </div>
            <div class="trip-info">
              <h4>{{booking.destination}}</h4>
              <p>{{booking.dates}}</p>
              <p class="price">{{booking.price | currency}}</p>
            </div>
          </div>
          <div class="booking-actions">
            <button class="view-btn">View Details</button>
            <button class="edit-btn">Edit</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bookings-content {
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

      .header-actions {
        display: flex;
        gap: 16px;

        button {
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }

        .filter-btn {
          background: var(--secondary);
          color: white;
        }

        .export-btn {
          background: #f0f0f0;
          color: #333;
        }
      }
    }

    .bookings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      gap: 24px;
    }

    .booking-card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);

      .booking-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;

        .booking-id {
          font-weight: 600;
          color: #666;
        }

        .status {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;

          &.confirmed { background: #e6f4ea; color: #1e8e3e; }
          &.pending { background: #fef7e0; color: #b17900; }
          &.cancelled { background: #fce8e6; color: #d93025; }
        }
      }

      .customer-info {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        h3 {
          margin: 0;
          font-size: 16px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }

      .trip-info {
        margin-bottom: 16px;

        h4 {
          margin: 0 0 8px;
          color: var(--primary);
        }

        p {
          margin: 4px 0;
          color: #666;
        }

        .price {
          font-weight: 600;
          color: var(--primary);
        }
      }

      .booking-actions {
        display: flex;
        gap: 8px;

        button {
          flex: 1;
          padding: 8px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }

        .view-btn {
          background: var(--secondary);
          color: white;
        }

        .edit-btn {
          background: #f0f0f0;
          color: #333;
        }
      }
    }
  `]
})
export class AdminBookingsComponent {
  bookings = [
    {
      id: 'B001',
      status: 'CONFIRMED',
      customerName: 'Emma Wilson',
      email: 'emma.w@example.com',
      customerAvatar: 'assets/images/avatar1.jpg',
      destination: 'Santorini Luxury Package',
      dates: 'Aug 15 - Aug 22, 2024',
      price: 1299
    },
    {
      id: 'B002',
      status: 'PENDING',
      customerName: 'James Miller',
      email: 'james.m@example.com',
      customerAvatar: 'assets/images/avatar2.jpg',
      destination: 'Bali Adventure Tour',
      dates: 'Sep 3 - Sep 12, 2024',
      price: 1599
    },
    {
      id: 'B003',
      status: 'CANCELLED',
      customerName: 'Sophie Chen',
      email: 'sophie.c@example.com',
      customerAvatar: 'assets/images/avatar3.jpg',
      destination: 'Maldives Beach Resort',
      dates: 'Jul 20 - Jul 28, 2024',
      price: 2199
    }
  ];
} 