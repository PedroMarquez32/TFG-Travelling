import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

interface Review {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss']
})
export class DestinationDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const destinationId = params['id'];
      // Aquí podrías cargar los datos específicos del destino
      // Por ahora usamos datos estáticos, pero en el futuro
      // podrías hacer una llamada a un servicio para obtener
      // los datos del destino específico
      console.log('Loading destination:', destinationId);
    });
  }

  destination = {
    name: 'Santorini, Greece',
    duration: '7 days',
    rating: 4.9,
    reviewCount: 128,
    price: 899,
    overview: 'Located in the stunning Aegean Sea, Santorini is a picturesque island in the Cyclades group of the Greek islands, known for its breathtaking sunsets, white-washed buildings with blue domes, and crystal-clear waters. This carefully curated itinerary takes you through the most iconic spots of this iconic Greek destination.',
    description: 'From exploring ancient ruins to tasting on unique volcanic beaches, from wine tasting at local vineyards to sailing around the caldera, this trip offers the perfect balance of adventure, relaxation, and authentic Greek experiences.',
    highlights: [
      {
        title: 'Sunset in Oia',
        description: 'Witness the world-famous sunset from the picturesque village of Oia, with its iconic blue-domed churches and winding pathways.'
      },
      {
        title: 'Caldera Sailing',
        description: 'Set sail around the volcanic caldera, swim in hot springs, and enjoy a BBQ lunch on board with local wine.'
      },
      {
        title: 'Wine Tasting',
        description: 'Visit traditional wineries and taste the unique volcanic wines of Santorini, including the famous Assyrtiko.'
      },
      {
        title: 'Ancient Akrotiri',
        description: 'Explore this prehistoric settlement of Akrotiri, often called the "Pompeii of Greece", preserved under volcanic ash.'
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Welcome',
        activities: [
          'Arrival at Santorini International Airport and private transfer to your hotel',
          'Welcome dinner at a traditional Greek taverna with panoramic caldera views',
          'Overnight in Oia'
        ]
      }
    ],
    accommodation: {
      name: 'Caldera View Luxury Suites',
      rating: 4.9,
      features: ['Infinity Pool', 'Free Wi-Fi', 'Breakfast Included', 'Spa Services'],
      description: 'Enjoy your stay at this beautiful boutique hotel featuring traditional Cycladic architecture with modern amenities. All rooms offer stunning caldera views, private terraces, and access to an infinity pool overlooking the Aegean Sea.'
    },
    userReviews: [
      {
        name: 'Maria Rodriguez',
        date: '2 months ago',
        rating: 5,
        comment: 'Our trip to Santorini was absolutely magical! The itinerary was perfectly balanced with guided tours and free time to explore. The sunset in Oia was even more beautiful than in photos, and the sailing tour around the caldera was the highlight of our trip! Highly recommend!'
      },
      {
        name: 'James Wilson',
        date: '1 month ago',
        rating: 5,
        comment: 'The hotel was amazing with breathtaking views of the caldera. The wine tour was exceptional! We learned so much about the unique volcanic wines of the region. The entire experience was unforgettable!'
      }
    ]
  };

  expandedDay: number | null = 1; // El primer día estará expandido por defecto

  toggleDay(dayNumber: number) {
    this.expandedDay = this.expandedDay === dayNumber ? null : dayNumber;
  }

  isDayExpanded(dayNumber: number): boolean {
    return this.expandedDay === dayNumber;
  }
} 