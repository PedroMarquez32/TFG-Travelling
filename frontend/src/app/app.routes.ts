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
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

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
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'profile',
    component: UserProfilePageComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
