import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-trip.component.html',
  styles: [`
    .custom-trip-page {
      min-height: 100vh;
      background: var(--cream);
      padding-top: 80px;
    }

    .hero-section {
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      padding: 60px 20px;
      text-align: center;
      color: white;

      h1 {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 16px;
      }

      p {
        font-size: 18px;
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .content-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 40px;
    }

    .step-section {
      background: white;
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);

      .step-header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;

        .step-number {
          background: var(--secondary);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        h2 {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-dark);
        }
      }
    }

    .search-container {
      position: relative;
      margin-bottom: 24px;

      input {
        width: 100%;
        padding: 16px;
        border: 2px solid rgba(0,0,0,0.1);
        border-radius: 12px;
        font-size: 16px;

        &:focus {
          outline: none;
          border-color: var(--secondary);
        }
      }

      .search-button {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
      }
    }

    .destination-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      button {
        padding: 8px 16px;
        border-radius: 20px;
        border: none;
        background: #f5f5f5;
        cursor: pointer;
        transition: all 0.3s ease;

        &.selected {
          background: var(--secondary);
          color: white;
        }
      }
    }

    .dates-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 16px;

      .date-input {
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 12px;
          border: 2px solid rgba(0,0,0,0.1);
          border-radius: 12px;
        }
      }
    }

    .flexible-dates {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 12px;
      cursor: pointer;
    }

    .travelers-input {
      .counter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background: #f5f5f5;
        border-radius: 12px;
        margin-bottom: 16px;

        .counter-controls {
          display: flex;
          align-items: center;
          gap: 16px;

          button {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            background: white;
            cursor: pointer;
            
            &:hover {
              background: var(--secondary);
              color: white;
            }
          }
        }
      }
    }

    .preferences-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 12px;
      margin-bottom: 24px;

      button {
        padding: 12px;
        border-radius: 12px;
        border: 2px solid rgba(0,0,0,0.1);
        background: white;
        cursor: pointer;

        &.selected {
          background: var(--secondary);
          color: white;
          border-color: var(--secondary);
        }
      }
    }

    .accommodation-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 16px;

      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 16px;
        border-radius: 12px;
        border: 2px solid rgba(0,0,0,0.1);
        background: white;
        cursor: pointer;

        &.selected {
          background: var(--secondary);
          color: white;
          border-color: var(--secondary);
        }

        .icon {
          font-size: 24px;
        }
      }
    }

    .action-buttons {
      display: flex;
      gap: 16px;
      margin-top: 32px;

      button {
        padding: 16px 32px;
        border-radius: 12px;
        border: none;
        font-weight: 600;
        cursor: pointer;

        &.save-draft {
          background: white;
          border: 2px solid var(--secondary);
          color: var(--secondary);
        }

        &.create-trip {
          background: var(--coral);
          color: white;
        }
      }
    }

    .trip-summary {
      background: white;
      border-radius: 24px;
      padding: 32px;
      position: sticky;
      top: 100px;
      height: fit-content;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);

      h2 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 24px;
      }

      .summary-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        
        span:first-child {
          color: var(--text-dark);
          opacity: 0.7;
        }
      }

      .cost-estimate {
        margin-top: 32px;
        padding-top: 24px;
        border-top: 1px solid rgba(0,0,0,0.1);

        .cost-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          
          span:first-child {
            color: var(--text-dark);
            opacity: 0.7;
          }
        }

        .total-cost {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          font-size: 18px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .estimate-note {
          font-size: 14px;
          color: var(--text-dark);
          opacity: 0.7;
          margin-top: 16px;
          text-align: center;
        }
      }
    }

    .budget-slider-container {
      padding: 20px 10px;
      margin-bottom: 24px;

      .budget-slider {
        width: 100%;
        height: 6px;
        -webkit-appearance: none;
        background: #e0e0e0;
        border-radius: 10px;
        outline: none;
        padding: 0;
        margin: 0;

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background-color: var(--secondary);
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          }
        }

        &::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background-color: var(--secondary);
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          }
        }

        &::-webkit-slider-runnable-track {
          height: 6px;
          border-radius: 10px;
          background: var(--secondary);
        }

        &::-moz-range-track {
          height: 6px;
          border-radius: 10px;
          background: var(--secondary);
        }
      }

      .budget-labels {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
        padding: 0 12px;

        span {
          font-size: 14px;
          color: var(--text-dark);

          &.min-budget {
            opacity: 0.7;
          }

          &.current-budget {
            font-size: 16px;
            font-weight: 600;
            color: var(--secondary);
            background: rgba(77, 168, 218, 0.1);
            padding: 4px 12px;
            border-radius: 20px;
          }

          &.max-budget {
            opacity: 0.7;
          }
        }
      }
    }
  `]
})
export class CustomTripComponent {
  searchQuery = '';
  selectedDestination = '';
  departureDate = '';
  returnDate = '';
  isFlexible = false;
  adults = 2;
  budgetValue = 1500;
  selectedPreferences: string[] = [];
  selectedAccommodation = '';

  popularDestinations = [
    'Bali, Indonesia',
    'Santorini, Greece',
    'Tokyo, Japan',
    'Barcelona, Spain',
    'Maldives',
    'Paris, France'
  ];

  preferences = [
    'Beach & Relaxation',
    'Cultural Experiences',
    'Adventure & Outdoor',
    'Food & Culinary',
    'Wellness & Spa',
    'Nightlife',
    'Shopping',
    'Family-Friendly'
  ];

  accommodationTypes = ['Hotel', 'Resort', 'Villa', 'Apartment'];

  selectDestination(dest: string) {
    this.selectedDestination = dest;
  }

  togglePreference(pref: string) {
    const index = this.selectedPreferences.indexOf(pref);
    if (index === -1) {
      this.selectedPreferences.push(pref);
    } else {
      this.selectedPreferences.splice(index, 1);
    }
  }

  selectAccommodation(type: string) {
    this.selectedAccommodation = type;
  }

  increaseAdults() {
    this.adults++;
  }

  decreaseAdults() {
    if (this.adults > 1) {
      this.adults--;
    }
  }

  formatDates() {
    if (!this.departureDate || !this.returnDate) return 'Not selected';
    return `${this.departureDate} - ${this.returnDate}`;
  }
} 