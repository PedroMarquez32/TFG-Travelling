import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterModule } from '@angular/router';

interface Recommendation {
  destination: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  description: string;
}

interface PastTrip {
  destination: string;
  dates: string;
  image: string;
  description: string;
}

interface UpcomingTrip {
  destination: string;
  dates: string;
  travelers: string;
  bookingId: string;
  countdown: {
    days: number;
    hours: number;
    minutes: number;
  };
  status: string;
}

interface UserProfile {
  name: string;
  memberSince: string;
  stats: {
    tripsCompleted: number;
    favorites: number;
    reviews: number;
  };
  upcomingTrip: UpcomingTrip;
  pastTrips: PastTrip[];
  recommendations: Recommendation[];
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: UserProfile = {
    name: 'Ana Rodriguez',
    memberSince: 'June 2022',
    stats: {
      tripsCompleted: 3,
      favorites: 6,
      reviews: 3
    },
    upcomingTrip: {
      destination: 'Santorini, Greece',
      dates: 'July 15 - July 22, 2023',
      travelers: '2 Adults',
      bookingId: 'TD-23789',
      countdown: {
        days: 23,
        hours: 14,
        minutes: 32
      },
      status: 'Confirmed'
    },
    pastTrips: [
      {
        destination: 'Bali, Indonesia',
        dates: 'March 10 - March 20, 2023',
        image: 'assets/images/bali.jpg',
        description: 'Enjoyed a 10-day tropical paradise experience with cultural tours, beach relaxation, and spa treatments.'
      },
      {
        destination: 'Barcelona, Spain',
        dates: 'October 5 - October 11, 2022',
        image: 'assets/images/barcelona.jpg',
        description: 'Explored the vibrant culture, stunning architecture, and delicious cuisine of this Mediterranean gem.'
      },
      {
        destination: 'Tokyo, Japan',
        dates: 'July 8 - July 17, 2022',
        image: 'assets/images/tokyo.jpg',
        description: 'Experienced the perfect blend of ancient traditions and cutting-edge technology in Japan\'s vibrant capital.'
      }
    ],
    recommendations: [
      {
        destination: 'Kyoto, Japan',
        duration: '8 days',
        rating: 4.9,
        reviews: 76,
        price: 1699,
        description: 'Since you enjoyed Tokyo, we think you\'ll love Kyoto\'s ancient temples, traditional tea houses, and beautiful bamboo forests.'
      },
      {
        destination: 'Amalfi Coast, Italy',
        duration: '9 days',
        rating: 4.8,
        reviews: 87,
        price: 1899,
        description: 'Based on your Mediterranean travels, you\'ll love the stunning coastal views, charming villages, and incredible Italian cuisine.'
      },
      {
        destination: 'Phuket, Thailand',
        duration: '10 days',
        rating: 4.7,
        reviews: 92,
        price: 1299,
        description: 'If you enjoyed Bali, you\'ll love Phuket\'s beautiful beaches, vibrant nightlife, and amazing Thai cuisine and culture.'
      }
    ]
  };
} 