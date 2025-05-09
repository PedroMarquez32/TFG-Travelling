import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, FormsModule],
  template: `
    <app-navbar></app-navbar>
    <div class="contact-hero">
      <h1>Contact Us</h1>
      <p>Get in touch with our travel experts for any questions or assistance</p>
    </div>
    <div class="contact-container">
      <div class="contact-info">
        <h3>TravelDream</h3>
        <p>Your trusted partner in creating unforgettable travel experiences since 2020.</p>
        
        <div class="info-item">
          <h4>Visit Us</h4>
          <p>123 Travel Street</p>
          <p>Madrid, Spain 28001</p>
        </div>
        
        <div class="info-item">
          <h4>Call Us</h4>
          <p>+34 900 123 456</p>
          <p>Mon - Fri, 9:00 - 18:00</p>
        </div>
      </div>

      <div class="contact-card">
        <h2>Send Us a Message</h2>
        <form (ngSubmit)="onSubmit()" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" [(ngModel)]="contactData.name" name="name" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" [(ngModel)]="contactData.email" name="email" required>
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" [(ngModel)]="contactData.subject" name="subject" required>
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" [(ngModel)]="contactData.message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .contact-hero {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
      text-align: center;
      padding: 100px 20px;
      margin-top: 80px;

      h1 {
        font-size: 48px;
        margin-bottom: 16px;
      }

      p {
        font-size: 18px;
        opacity: 0.9;
      }
    }

    .contact-container {
      flex: 1;
      background: var(--cream);
      padding: 80px 24px;
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      max-width: 1200px;
      margin: 0 auto;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .contact-info {
      padding: 40px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);

      h3 {
        font-size: 24px;
        margin-bottom: 16px;
        color: var(--text-dark);
      }

      .info-item {
        margin-top: 32px;

        h4 {
          color: var(--secondary);
          margin-bottom: 8px;
        }

        p {
          color: var(--text-dark);
          margin-bottom: 4px;
        }
      }
    }

    .contact-card {
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 600px;
      animation: slideUp 0.5s ease-out;

      h2 {
        font-size: 28px;
        color: var(--text-dark);
        margin-bottom: 8px;
        text-align: center;
      }

      .subtitle {
        color: #666;
        text-align: center;
        margin-bottom: 32px;
      }
    }

    .contact-form {
      .form-group {
        margin-bottom: 24px;

        label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.3s ease;

          &:focus {
            outline: none;
            border-color: var(--secondary);
            box-shadow: 0 0 0 2px rgba(77, 168, 218, 0.1);
          }
        }

        textarea {
          resize: vertical;
        }
      }

      .submit-btn {
        width: 100%;
        padding: 14px;
        background: var(--secondary);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: var(--accent);
          transform: translateY(-2px);
        }
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact form submitted:', this.contactData);
  }
} 