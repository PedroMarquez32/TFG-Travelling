import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NavbarComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-card">
          <h1>Create Account</h1>
          <p class="subtitle">Join us and start planning your next adventure</p>

          <form (ngSubmit)="onSubmit()" #registerForm="ngForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                [(ngModel)]="registerData.name"
                required
                placeholder="Enter your full name">
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                [(ngModel)]="registerData.email"
                required
                placeholder="Enter your email">
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                [(ngModel)]="registerData.password"
                required
                placeholder="Create a password">
            </div>

            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword"
                [(ngModel)]="registerData.confirmPassword"
                required
                placeholder="Confirm your password">
            </div>

            <button type="submit" class="submit-button" [disabled]="!registerForm.form.valid">
              Create Account
            </button>

            <div class="auth-footer">
              <p>Already have an account? <a routerLink="/login">Sign In</a></p>
            </div>
          </form>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .auth-page {
      padding-top: 80px;
      min-height: 100vh;
      background: linear-gradient(135deg, var(--cream) 0%, #fff5eb 100%);
      display: flex;
      flex-direction: column;
    }

    .auth-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
    }

    .auth-card {
      background: var(--white);
      border-radius: 24px;
      padding: 40px;
      width: 100%;
      max-width: 480px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);

      h1 {
        font-size: 32px;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 8px;
        text-align: center;
      }

      .subtitle {
        color: var(--text-dark);
        opacity: 0.7;
        text-align: center;
        margin-bottom: 32px;
      }

      .form-group {
        margin-bottom: 24px;

        label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-dark);
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          font-size: 16px;
          transition: border-color 0.3s ease;

          &:focus {
            outline: none;
            border-color: var(--secondary);
          }
        }
      }

      .submit-button {
        width: 100%;
        padding: 14px;
        background: var(--secondary);
        color: var(--white);
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

      .auth-footer {
        margin-top: 24px;
        text-align: center;
        color: var(--text-dark);

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
  `],
  animations: [
    trigger('registerAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 })),
        query('form > *', [
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          stagger(80, [
            animate('0.4s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class RegisterComponent {
  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    this.authService.register(this.registerData).subscribe({
      next: () => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Registration failed: ' + (err.error.detail || 'Unknown error'));
      }
    });
  }
} 