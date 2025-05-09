import { trigger, transition, style, animate, query, stagger, group } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 }),
      animate('0.6s ease', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);

export const slideInAnimation = trigger('slideInAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
    ], { optional: true })
  ])
]); 