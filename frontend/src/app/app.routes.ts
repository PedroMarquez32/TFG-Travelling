import { Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AdminLayoutComponent } from './pages/admin/admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { CustomTripComponent } from './pages/custom-trip/custom-trip.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminDashboardComponent } from './pages/admin/dashboard/admin-dashboard.component';
import { AdminDestinationsComponent } from './pages/admin/destinations/admin-destinations.component';
import { DestinationDetailsComponent } from './pages/destination-details/destination-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'destinations',
    children: [
      {
        path: '',
        component: DestinationsComponent,
        data: { animation: 'destinations' }
      },
      {
        path: ':id',
        component: DestinationDetailsComponent,
        data: { animation: 'destination-details' }
      }
    ]
  },
  {
    path: 'custom-trip',
    component: CustomTripComponent,
    data: { animation: 'custom-trip' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'login' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: 'register' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'destinations',
        component: AdminDestinationsComponent
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/admin/users/admin-users.component')
          .then(m => m.AdminUsersComponent)
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
  },
  {
    path: '**',
    redirectTo: ''
  }
];
