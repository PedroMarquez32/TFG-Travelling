import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {
  constructor(private router: Router) {}

  destinations = [
    {
      name: 'Santorini, Greece',
      description: 'Experience the stunning white-washed buildings, blue domes, and breathtaking sunsets. Includes guided tours, beach time, and wine tasting.',
      price: 899,
      image: 'assets/images/santorini.jpg',
      duration: '7 days',
      rating: 4.9,
      reviews: 128,
      tag: 'BEST SELLER'
    },
    {
      name: 'Bali, Indonesia',
      description: 'Discover lush landscapes, ancient temples, pristine beaches, and the rich cultural heritage. Includes luxury accommodations and spa treatments.',
      price: 1199,
      image: 'assets/images/bali.jpg',
      duration: '10 days',
      rating: 4.8,
      reviews: 143
    },
    {
      name: 'Maldives',
      description: 'Indulge in luxury overwater bungalows, crystal-clear turquoise waters, and pristine white sand beaches. Perfect for honeymoons and romantic getaways.',
      price: 1599,
      image: 'assets/images/maldives.jpg',
      duration: '8 days',
      rating: 4.9,
      reviews: 176,
      tag: 'NEW'
    },
    // Añade más destinos aquí...
  ];

  filters = {
    region: 'All',
    price: 'All',
    duration: 'All',
    rating: 'All'
  };

  viewDestinationDetails(destinationName: string) {
    // Convertir el nombre a un formato URL-friendly
    const urlName = destinationName.toLowerCase().replace(', ', '-');
    this.router.navigate(['/destinations', urlName]);
  }
} 