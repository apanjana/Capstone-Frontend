import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusServiceService } from '../bus-service.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

@Component({
  selector: 'app-user-bus-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    RouterOutlet,
    FormsModule,
    NavbarUserComponent
  ],
  templateUrl: './user-bus-page.component.html',
  styleUrls: ['./user-bus-page.component.css']
})
export class UserBusPageComponent {
  buses: any[] = []; // Declare buses as an array of any type
  route = ''; // Model for the input route
  startRoute = ''; // Start route input field
  endRoute = ''; // End route input field

  filteredBuses: any[] = [];

  constructor(
    private router: Router,
    private busService: BusServiceService
  ) {
    console.log('UserBusPageComponent initialized');
  }

  // Method to fetch all buses
  getAllBuses() {
    this.busService.getAllBuses().subscribe({
      next: (data) => {
        console.log('Fetched buses:', data);
        this.buses = data;
      },
      error: (error) => {
        console.error('Error fetching buses:', error);
      }
    });
  }

  // Method to fetch buses by route
  getBusesByRoute() {
    if (!this.route) {
      alert('Please enter a route');
      return;
    }

    this.busService.getBusByRoute(this.route).subscribe({
      next: (data) => {
        this.filteredBuses = data;
      },
      error: (error) => {
        console.error('Error fetching buses by route:', error);
      }
    });
  }

  // New method to fetch buses by route pattern (start and end route)
  getBusesByRoutePattern() {
    if (!this.startRoute || !this.endRoute) {
      alert('Please enter both start and end routes');
      return;
    }

    this.busService.getBusesByRoutePattern(this.startRoute, this.endRoute).subscribe({
      next: (data) => {
        this.filteredBuses = data;
      },
      error: (error) => {
        console.error('Error fetching buses by route pattern:', error);
      }
    });
  }
}
