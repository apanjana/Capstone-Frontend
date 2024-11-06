import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin-main-page',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
  templateUrl: './admin-main-page.component.html',
  styleUrl: './admin-main-page.component.css'
})
export class AdminMainPageComponent {

  notifications = [
    { id: 1, message: 'Bus 1 is delayed by 10 minutes' },
    { id: 2, message: 'Route 2 is experiencing high traffic' },
    // { id: 3, message: 'Route 3 is here'},
    // Add more notifications
  ];

  viewNotification(id: number) {
    console.log(`View notification ID: ${id}`);
    // Implement view notification logic here
  }

}
