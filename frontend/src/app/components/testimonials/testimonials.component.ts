@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="testimonials">
      <h2 class="section-title">What Our Travelers Say</h2>
      <p class="section-subtitle">Hear from people who have experienced our services</p>
      
      <div class="testimonials-grid">
        <div class="testimonial-card" *ngFor="let testimonial of testimonials">
          <mat-icon class="quote-icon">format_quote</mat-icon>
          <p class="testimonial-text">{{testimonial.text}}</p>
          <div class="author">
            <div class="avatar">
              <img [src]="testimonial.avatar" [alt]="testimonial.name">
            </div>
            <div class="info">
              <h4>{{testimonial.name}}</h4>
              <span>{{testimonial.package}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials.component.scss']
}) 