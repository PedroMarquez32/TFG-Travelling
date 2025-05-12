import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userInitials',
  standalone: true
})
export class UserInitialsPipe implements PipeTransform {
  transform(user: any): string {
    if (!user?.full_name) return 'U';
    return user.full_name.substring(0, 2).toUpperCase();
  }
} 