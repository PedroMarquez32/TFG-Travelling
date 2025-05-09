import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./users/admin-users.component').then(m => m.AdminUsersComponent)
  },
  {
    path: 'destinations',
    loadComponent: () => import('./destinations/admin-destinations.component').then(m => m.AdminDestinationsComponent)
  },
  {
    path: 'bookings',
    loadComponent: () => import('./bookings/admin-bookings.component').then(m => m.AdminBookingsComponent)
  },
  {
    path: 'finances',
    loadComponent: () => import('./finances/admin-finances.component').then(m => m.AdminFinancesComponent)
  },
  {
    path: 'reviews',
    loadComponent: () => import('./reviews/admin-reviews.component').then(m => m.AdminReviewsComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/admin-settings.component').then(m => m.AdminSettingsComponent)
  }
]; 