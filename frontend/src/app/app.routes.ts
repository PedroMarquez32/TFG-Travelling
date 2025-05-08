import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { DestinationsComponent } from './components/destinations/destinations.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: '**', redirectTo: '' }
];
