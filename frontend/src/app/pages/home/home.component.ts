import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger, group } from '@angular/animations';
import { fadeAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeAnimation,
    trigger('heroAnimation', [
      transition(':enter', [
        group([
          query('.hero-content', [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ]),
          query('.search-bar', [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            animate('0.8s 0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('featuredDestinations', [
      transition(':enter', [
        query('.destination-card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent {
  constructor(private router: Router) {}

  viewDestinationDetails(destinationName: string) {
    const urlName = destinationName.toLowerCase().replace(', ', '-');
    this.router.navigate(['/destinations', urlName]);
  }

  featuredDestinations = [
    {
      name: 'Santorini, Greece',
      description: 'Experience the stunning white-washed buildings, blue domes, and breathtaking sunsets of this iconic Greek island.',
      price: 899,
      image: 'assets/images/santorini.jpg'
    },
    {
      name: 'Bali, Indonesia',
      description: 'Discover lush landscapes, ancient temples, pristine beaches, and the rich cultural heritage of this tropical paradise.',
      price: 1199,
      image: 'assets/images/bali.jpg'
    },
    {
      name: 'Maldives',
      description: 'Indulge in luxury overwater bungalows, crystal-clear turquoise waters, and pristine white sand beaches.',
      price: 1599,
      image: 'assets/images/maldives.jpg'
    }
  ];

  specialOffers = [
    {
      title: 'Summer Beach Getaway',
      description: '7 days in the Caribbean with all-inclusive resort stay',
      originalPrice: 1899,
      discountedPrice: 1424,
      discount: 25
    },
    {
      title: 'European Adventure',
      description: '10 days touring Paris, Rome, and Barcelona',
      originalPrice: 2499,
      discountedPrice: 1749,
      discount: 30
    }
  ];
}
