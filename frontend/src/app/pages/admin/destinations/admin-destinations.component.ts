import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-destinations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-destinations">
      <header class="page-header">
        <h1>Destinations Management</h1>
        <button class="btn-primary" (click)="showAddDestinationModal = true">
          <i class="fas fa-plus"></i> Add New Destination
        </button>
      </header>

      <div class="search-filters">
        <input type="text" placeholder="Search destinations..." [(ngModel)]="searchTerm">
        <select [(ngModel)]="filterRegion">
          <option value="">All Regions</option>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
          <option value="americas">Americas</option>
        </select>
      </div>

      <div class="destinations-grid">
        <div class="destination-card" *ngFor="let destination of destinations">
          <img [src]="destination.image" [alt]="destination.name">
          <div class="destination-info">
            <h3>{{destination.name}}</h3>
            <p>{{destination.description}}</p>
            <div class="destination-meta">
              <span>{{destination.price | currency}}</span>
              <span>{{destination.duration}}</span>
            </div>
            <div class="actions">
              <button class="btn-edit" (click)="editDestination(destination)">
                <i class="fas fa-edit"></i> Edit
              </button>
              <button class="btn-delete" (click)="deleteDestination(destination)">
                <i class="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal para añadir/editar destino -->
      <div class="modal" *ngIf="showAddDestinationModal">
        <!-- ... contenido del modal ... -->
      </div>
    </div>
  `,
  styles: [`
    .admin-destinations {
      .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;

        h1 {
          font-size: 24px;
          font-weight: 600;
        }
      }

      .search-filters {
        display: flex;
        gap: 16px;
        margin-bottom: 24px;

        input, select {
          padding: 8px 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
        }
      }

      .destinations-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
      }

      .destination-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .destination-info {
          padding: 16px;

          h3 {
            margin: 0 0 8px;
            font-size: 18px;
          }

          p {
            color: #666;
            font-size: 14px;
            margin-bottom: 16px;
          }

          .destination-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            font-size: 14px;
            color: #666;
          }

          .actions {
            display: flex;
            gap: 8px;

            button {
              flex: 1;
              padding: 8px;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-size: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;

              &.btn-edit {
                background: var(--secondary);
                color: white;
              }

              &.btn-delete {
                background: #ff4444;
                color: white;
              }
            }
          }
        }
      }
    }
  `]
})
export class AdminDestinationsComponent {
  destinations = [
    {
      name: 'Santorini, Greece',
      description: 'Beautiful island with white-washed buildings and stunning sunsets',
      price: 899,
      image: 'assets/images/santorini.jpg',
      duration: '7 days'
    },
    // ... más destinos
  ];

  searchTerm = '';
  filterRegion = '';
  showAddDestinationModal = false;

  editDestination(destination: any) {
    // Implementar lógica de edición
  }

  deleteDestination(destination: any) {
    // Implementar lógica de eliminación
  }
} 