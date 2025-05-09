import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-card">
          <h1>Welcome Back!</h1>
          <p class="subtitle">Sign in to continue your journey</p>

          <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                [(ngModel)]="loginData.email"
                required
                placeholder="Enter your email">
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                [(ngModel)]="loginData.password"
                required
                placeholder="Enter your password">
              <a href="#" class="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" class="submit-button" [disabled]="!loginForm.form.valid">
              Sign In
            </button>

            <div class="auth-footer">
              <p>Don't have an account? <a routerLink="/register">Sign Up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-page {
      min-height: 100vh;
      background: linear-gradient(135deg, var(--cream) 0%, #fff5eb 100%);
      display: flex;
      flex-direction: column;
      padding-top: 80px;
    }

    .auth-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 20px;
      margin-top: 40px;
    }

    .auth-card {
      background: var(--white);
      border-radius: 32px;
      padding: 48px;
      width: 100%;
      max-width: 520px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);

      h1 {
        font-size: 36px;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 12px;
        text-align: center;
      }

      .subtitle {
        font-size: 16px;
        color: var(--text-dark);
        opacity: 0.7;
        text-align: center;
        margin-bottom: 48px;
      }

      .form-group {
        margin-bottom: 32px;

        label {
          display: block;
          margin-bottom: 12px;
          color: var(--text-dark);
          font-weight: 600;
          font-size: 15px;
        }

        input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #fafafa;

          &:focus {
            outline: none;
            border-color: var(--secondary);
            background: white;
            box-shadow: 0 4px 12px rgba(77, 168, 218, 0.08);
          }

          &::placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }

        .forgot-password {
          display: block;
          text-align: right;
          color: var(--secondary);
          text-decoration: none;
          font-size: 14px;
          margin-top: 12px;
          font-weight: 500;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .submit-button {
        width: 100%;
        padding: 18px;
        background: var(--secondary);
        color: var(--white);
        border: none;
        border-radius: 16px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 8px;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(77, 168, 218, 0.2);
        }

        &:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
      }

      .auth-footer {
        margin-top: 32px;
        text-align: center;
        color: var(--text-dark);
        font-size: 15px;

        a {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 600;
          margin-left: 4px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  `]
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