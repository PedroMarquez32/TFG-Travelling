import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule, FormsModule],
  template: `
    <app-navbar></app-navbar>
    <div class="auth-container">
      <div class="auth-card">
        <h2>Welcome Back</h2>
        <p class="subtitle">Please login to your account</p>
        
        <form (ngSubmit)="onSubmit()" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" [(ngModel)]="loginData.email" name="email" required>
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" [(ngModel)]="loginData.password" name="password" required>
          </div>
          
          <div class="form-actions">
            <label class="remember-me">
              <input type="checkbox">
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" class="forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit" class="submit-btn">Login</button>
          
          <p class="register-link">
            Don't have an account? <a routerLink="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: calc(100vh - 80px);
      padding: 100px 24px 40px;
      background: var(--cream);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .auth-card {
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
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

    .auth-form {
      .form-group {
        margin-bottom: 24px;

        label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        input {
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
      }

      .form-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;

        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .forgot-password {
          color: var(--secondary);
          text-decoration: none;
          
          &:hover {
            text-decoration: underline;
          }
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

      .register-link {
        text-align: center;
        margin-top: 24px;
        color: #666;

        a {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 600;
          
          &:hover {
            text-decoration: underline;
          }
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
  `],
  animations: [
    trigger('formAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        query('form > *', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(50, [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Login attempt:', this.loginData);
    // Aquí implementaremos la lógica de login más adelante
  }
} 