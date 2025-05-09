import { Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AdminLayoutComponent } from './pages/admin/admin-layout.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'destinations', loadComponent: () => import('./pages/destinations/destinations.component').then(m => m.DestinationsComponent) },
  { path: 'destinations/:id', loadComponent: () => import('./pages/destination-details/destination-details.component').then(m => m.DestinationDetailsComponent) },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent)
  },
  { 
    path: 'custom-trip', 
    loadComponent: () => import('./pages/custom-trip/custom-trip.component').then(m => m.CustomTripComponent) 
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/admin/users/admin-users.component')
          .then(m => m.AdminUsersComponent)
      },
      {
        path: 'destinations',
        loadComponent: () => import('./pages/admin/destinations/admin-destinations.component')
          .then(m => m.AdminDestinationsComponent)
      },
      {
        path: 'bookings',
        loadComponent: () => import('./pages/admin/bookings/admin-bookings.component')
          .then(m => m.AdminBookingsComponent)
      },
      {
        path: 'finances',
        loadComponent: () => import('./pages/admin/finances/admin-finances.component')
          .then(m => m.AdminFinancesComponent)
      },
      {
        path: 'reviews',
        loadComponent: () => import('./pages/admin/reviews/admin-reviews.component')
          .then(m => m.AdminReviewsComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/admin/settings/admin-settings.component')
          .then(m => m.AdminSettingsComponent)
      }
    ]
  }
];
