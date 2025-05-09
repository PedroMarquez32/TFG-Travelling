import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reviews-content">
      <header class="page-header">
        <h1>Reviews Management</h1>
        <div class="header-actions">
          <select class="filter-select">
            <option value="all">All Reviews</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </header>

      <div class="reviews-grid">
        <div class="review-card" *ngFor="let review of reviews">
          <div class="review-header">
            <div class="user-info">
              <img [src]="review.userAvatar" [alt]="review.userName">
              <div>
                <h3>{{review.userName}}</h3>
                <div class="rating">
                  <span class="stars">⭐</span>
                  <span>{{review.rating}}</span>
                </div>
              </div>
            </div>
            <span class="status {{review.status.toLowerCase()}}">{{review.status}}</span>
          </div>

          <div class="review-content">
            <h4>{{review.destination}}</h4>
            <p>{{review.comment}}</p>
            <span class="date">{{review.date}}</span>
          </div>

          <div class="review-actions">
            <button class="approve-btn" *ngIf="review.status === 'PENDING'">Approve</button>
            <button class="reject-btn" *ngIf="review.status === 'PENDING'">Reject</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .reviews-content {
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

      .filter-select {
        padding: 8px 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 14px;
      }
    }

    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      gap: 24px;
    }

    .review-card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);

      .review-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;

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

          .rating {
            display: flex;
            align-items: center;
            gap: 4px;
            color: #666;
          }
        }

        .status {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;

          &.approved { background: #e6f4ea; color: #1e8e3e; }
          &.pending { background: #fef7e0; color: #b17900; }
          &.rejected { background: #fce8e6; color: #d93025; }
        }
      }

      .review-content {
        h4 {
          margin: 0 0 8px;
          color: var(--primary);
        }

        p {
          margin: 0 0 12px;
          color: #666;
          line-height: 1.5;
        }

        .date {
          font-size: 14px;
          color: #999;
        }
      }

      .review-actions {
        display: flex;
        gap: 8px;
        margin-top: 16px;

        button {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }

        .approve-btn {
          background: var(--secondary);
          color: white;
        }

        .reject-btn {
          background: #f0f0f0;
          color: #333;
        }

        .delete-btn {
          background: #fce8e6;
          color: #d93025;
        }
      }
    }
  `]
})
export class AdminReviewsComponent {
  reviews = [
    {
      userName: 'Emma Wilson',
      userAvatar: 'assets/images/avatar1.jpg',
      rating: 4.5,
      destination: 'Santorini Luxury Package',
      comment: 'Amazing experience! The views were breathtaking and the service was exceptional. Would highly recommend!',
      date: '2024-02-15',
      status: 'PENDING'
    },
    {
      userName: 'James Miller',
      userAvatar: 'assets/images/avatar2.jpg',
      rating: 5.0,
      destination: 'Bali Adventure Tour',
      comment: 'Perfect mix of adventure and relaxation. The local guides were knowledgeable and friendly.',
      date: '2024-02-14',
      status: 'APPROVED'
    },
    {
      userName: 'Sophie Chen',
      userAvatar: 'assets/images/avatar3.jpg',
      rating: 3.5,
      destination: 'Maldives Beach Resort',
      comment: 'Beautiful location but the service could be improved. Some facilities needed maintenance.',
      date: '2024-02-13',
      status: 'REJECTED'
    }
  ];
} 