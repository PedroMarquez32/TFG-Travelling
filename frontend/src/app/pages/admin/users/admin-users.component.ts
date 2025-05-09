import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="users-content">
      <div class="header">
        <h2>Users Management</h2>
        <button class="add-user">+ Add New User</button>
      </div>

      <div class="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>johndoe&#64;domain.com</td>
              <td>User</td>
              <td>Active</td>
              <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .users-content {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      h2 {
        font-size: 24px;
        font-weight: 600;
      }

      .add-user {
        background: var(--secondary);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(77, 168, 218, 0.2);
        }
      }
    }

    .users-table {
      width: 100%;
      
      table {
        width: 100%;
        border-collapse: collapse;

        th, td {
          padding: 16px;
          text-align: left;
          border-bottom: 1px solid #e0e0e0;
        }

        th {
          font-weight: 500;
          color: #666;
        }

        td {
          .edit, .delete {
            padding: 6px 12px;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            margin-right: 8px;
          }

          .edit {
            background: var(--secondary);
            color: white;
          }

          .delete {
            background: #ff4444;
            color: white;
          }
        }
      }
    }
  `]
})
export class AdminUsersComponent {} 