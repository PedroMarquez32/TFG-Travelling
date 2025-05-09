import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="settings-content">
      <header class="page-header">
        <h1>System Settings</h1>
        <button class="save-btn">Save Changes</button>
      </header>

      <div class="settings-grid">
        <div class="settings-section">
          <h2>General Settings</h2>
          <div class="setting-item">
            <label>Company Name</label>
            <input type="text" value="TravelDream">
          </div>
          <div class="setting-item">
            <label>Contact Email</label>
            <input type="email" value="contact@traveldream.com">
          </div>
          <div class="setting-item">
            <label>Default Currency</label>
            <select>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>

        <div class="settings-section">
          <h2>Booking Settings</h2>
          <div class="setting-item">
            <label>Minimum Booking Notice (days)</label>
            <input type="number" value="3">
          </div>
          <div class="setting-item">
            <label>Cancellation Period (hours)</label>
            <input type="number" value="48">
          </div>
          <div class="setting-item">
            <div class="toggle-setting">
              <span>Allow Instant Booking</span>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <h2>Notification Settings</h2>
          <div class="setting-item">
            <div class="toggle-setting">
              <span>Email Notifications</span>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
          </div>
          <div class="setting-item">
            <div class="toggle-setting">
              <span>SMS Notifications</span>
              <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
          </div>
          <div class="setting-item">
            <div class="toggle-setting">
              <span>Push Notifications</span>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('settingAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  styles: [`
    .settings-content {
      padding: 24px;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;

      h1 {
        font-size: 24px;
        font-weight: 600;
      }

      .save-btn {
        padding: 10px 20px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          opacity: 0.9;
        }
      }
    }

    .settings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    .settings-section {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;

      h2 {
        margin: 0 0 24px;
        font-size: 18px;
        color: var(--primary);
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      }
    }

    .setting-item {
      margin-bottom: 20px;

      label {
        display: block;
        margin-bottom: 8px;
        color: #666;
        font-size: 14px;
      }

      input, select {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 14px;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: var(--secondary);
          transform: scale(1.02);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
      }
    }

    .toggle-setting {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;

      span {
        color: #333;
      }
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 24px;

      input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
          background-color: var(--primary);
        }

        &:checked + .slider:before {
          transform: translateX(26px);
        }
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: all 0.3s ease;
        border-radius: 34px;

        &:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
      }
    }

    @media (max-width: 768px) {
      .page-header {
        flex-direction: column;
        gap: 16px;
        
        .save-btn {
          width: 100%;
        }
      }

      .settings-section {
        padding: 16px;
      }

      .setting-item {
        margin-bottom: 16px;
      }
    }
  `]
})
export class AdminSettingsComponent {} 