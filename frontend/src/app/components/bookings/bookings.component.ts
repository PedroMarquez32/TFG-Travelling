import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  template: `
    <h2>Mis Reservas</h2>
    <table mat-table [dataSource]="bookings" class="mat-elevation-z8">
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> ID </th>
        <td mat-cell *matCellDef="let booking"> {{booking.id}} </td>
      </ng-container>

      <ng-container matColumnDef="destination">
        <th mat-header-cell *matHeaderCellDef> Destino </th>
        <td mat-cell *matCellDef="let booking"> {{booking.destination}} </td>
      </ng-container>

      <ng-container matColumnDef="date">
        <th mat-header-cell *matHeaderCellDef> Fecha </th>
        <td mat-cell *matCellDef="let booking"> {{booking.date | date}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: [`
    table {
      width: 100%;
      margin-top: 20px;
    }
  `]
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];
  displayedColumns: string[] = ['id', 'destination', 'date'];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getBookings().subscribe({
      next: (data) => {
        this.bookings = data;
      },
      error: (error) => {
        console.error('Error fetching bookings', error);
      }
    });
  }
} 