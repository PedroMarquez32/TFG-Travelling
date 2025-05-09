import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-page">
      <div class="hero-section">
        <h1>Contact Us</h1>
        <p>Get in touch with our travel experts for any questions or assistance</p>
      </div>

      <div class="content-container">
        <div class="contact-grid">
          <!-- Información de contacto -->
          <div class="company-info">
            <h2>TravelDream</h2>
            <p class="company-description">
              Your trusted partner in creating unforgettable travel experiences since 2020. We specialize in crafting personalized journeys that match your dreams and preferences.
            </p>
            
            <div class="info-items">
              <div class="info-item">
                <span class="icon">📍</span>
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Travel Street<br>Madrid, Spain 28001</p>
                </div>
              </div>

              <div class="info-item">
                <span class="icon">📞</span>
                <div>
                  <h3>Call Us</h3>
                  <p>+34 900 123 456<br>Mon - Fri, 9:00 - 18:00</p>
                </div>
              </div>

              <div class="info-item">
                <span class="icon">✉️</span>
                <div>
                  <h3>Email Us</h3>
                  <p>info&#64;traveldream.com<br>We'll respond within 24h</p>
                </div>
              </div>

              <div class="info-item">
                <span class="icon">💬</span>
                <div>
                  <h3>Follow Us</h3>
                  <div class="social-links">
                    <a href="#" target="_blank">Facebook</a>
                    <a href="#" target="_blank">Instagram</a>
                    <a href="#" target="_blank">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulario de contacto -->
          <div class="contact-form-container">
            <div class="form-card">
              <h2>Send Us a Message</h2>
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    [(ngModel)]="contactData.name"
                    required
                    placeholder="Enter your full name"
                  >
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="contactData.email"
                    required
                    placeholder="Enter your email"
                  >
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <select 
                    id="subject" 
                    name="subject"
                    [(ngModel)]="contactData.subject"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    [(ngModel)]="contactData.message"
                    required
                    rows="5"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  class="submit-button" 
                  [disabled]="!contactForm.form.valid"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-page {
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
      padding: 60px 20px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: start;
    }

    .company-info {
      h2 {
        font-size: 32px;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 16px;
      }

      .company-description {
        font-size: 16px;
        line-height: 1.6;
        color: var(--text-dark);
        opacity: 0.8;
        margin-bottom: 40px;
      }
    }

    .info-items {
      display: grid;
      gap: 32px;

      .info-item {
        display: flex;
        gap: 16px;
        align-items: flex-start;

        .icon {
          font-size: 24px;
          background: rgba(77, 168, 218, 0.1);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        p {
          color: var(--text-dark);
          opacity: 0.8;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 12px;

          a {
            color: var(--secondary);
            text-decoration: none;
            font-weight: 500;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .contact-form-container {
      .form-card {
        background: white;
        border-radius: 24px;
        padding: 40px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.05);

        h2 {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 32px;
        }
      }
    }

    .form-group {
      margin-bottom: 24px;

      label {
        display: block;
        margin-bottom: 8px;
        color: var(--text-dark);
        font-weight: 500;
      }

      input, select, textarea {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid rgba(0,0,0,0.1);
        border-radius: 12px;
        font-size: 16px;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: var(--secondary);
          box-shadow: 0 0 0 4px rgba(77, 168, 218, 0.1);
        }
      }

      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }

    .submit-button {
      width: 100%;
      padding: 16px;
      background: var(--secondary);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(77, 168, 218, 0.2);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
      }
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
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
    console.log('Form submitted:', this.contactData);
    // Aquí implementaremos la lógica de envío más adelante
  }
} 