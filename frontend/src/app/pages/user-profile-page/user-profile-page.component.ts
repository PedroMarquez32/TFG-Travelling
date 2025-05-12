import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { UserInitialsPipe } from '../../shared/pipes/user-initials.pipe';
import { MatButtonModule } from '@angular/material/button';

interface Trip {
  id: string;
  destination: string;
  description: string;
  imageUrl: string;
  date?: string;
  status?: string;
  startDate?: Date;
  endDate?: Date;
  travelers?: number;
  bookingId?: string;
}

interface Recommendation {
  id: string;
  destination: string;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    UserInitialsPipe,
    MatButtonModule
  ],
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {
  user: any;
  tripsCompleted: number = 4;
  favorites: number = 6;
  reviews: number = 3;
  activeTab: string = 'trips';

  upcomingTrips: Trip[] = [
    {
      id: 'TD-23789',
      destination: 'Santorini, Greece',
      status: 'Confirmed',
      startDate: new Date('2024-07-15'),
      endDate: new Date('2024-07-22'),
      travelers: 2,
      bookingId: 'TD-23789',
      imageUrl: 'assets/images/santorini.jpg',
      description: 'Experience the stunning white-washed buildings and breathtaking sunsets.',
      date: 'July 15 - July 22, 2024'
    }
  ];

  pastTrips: Trip[] = [
    {
      id: 'PT-001',
      destination: 'Bali, Indonesia',
      date: 'March 10 - March 20, 2023',
      description: 'Enjoyed a 10-day tropical paradise experience with cultural tours, beach relaxation, and spa treatments.',
      imageUrl: 'assets/images/bali.jpg'
    },
    {
      id: 'PT-002',
      destination: 'Barcelona, Spain',
      date: 'October 5 - October 11, 2022',
      description: 'Explored the vibrant culture, stunning architecture, and delicious cuisine of this Mediterranean gem.',
      imageUrl: 'assets/images/barcelona.jpg'
    }
  ];

  recommendations: Recommendation[] = [
    {
      id: 'REC-001',
      destination: 'Kyoto, Japan',
      duration: '8 days',
      rating: 4.9,
      reviews: 94,
      description: 'Since you enjoyed Tokyo, we think you\'ll love Kyoto\'s ancient temples, traditional tea houses, and beautiful bamboo forests.',
      price: 1699,
      imageUrl: 'assets/images/kyoto.jpg'
    },
    {
      id: 'REC-002',
      destination: 'Amalfi Coast, Italy',
      duration: '9 days',
      rating: 4.8,
      reviews: 87,
      description: 'Based on your Mediterranean travels, you\'ll love the stunning coastal views, charming villages, and incredible Italian cuisine.',
      price: 1899,
      imageUrl: 'assets/images/amalfi.jpg'
    }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
    });
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  viewTripDetails(tripId: string): void {
    this.router.navigate(['/trips', tripId, 'details']);
  }

  modifyTrip(tripId: string): void {
    this.router.navigate(['/trips', tripId, 'edit']);
  }

  viewPhotos(tripId: string): void {
    this.router.navigate(['/trips', tripId, 'photos']);
  }

  writeReview(tripId: string): void {
    this.router.navigate(['/trips', tripId, 'review']);
  }

  editProfile(): void {
    this.router.navigate(['/profile/edit']);
  }

  calculateTimeRemaining(startDate: Date | undefined): { days: number; hours: number; minutes: number } {
    if (!startDate) {
      return { days: 0, hours: 0, minutes: 0 };
    }
    const now = new Date();
    const diff = startDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { days, hours, minutes };
  }

  hasUpcomingTrip(): boolean {
    return this.upcomingTrips.length > 0 && !!this.upcomingTrips[0];
  }

  getTimeRemaining(): { days: number; hours: number; minutes: number } {
    if (!this.hasUpcomingTrip()) {
      return { days: 0, hours: 0, minutes: 0 };
    }
    return this.calculateTimeRemaining(this.upcomingTrips[0].startDate);
  }
}