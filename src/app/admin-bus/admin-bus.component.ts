import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
// import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { CourseService } from '../course.service';
import { FormsModule } from '@angular/forms';
import { BusServiceService } from '../bus-service.service';


@Component({
  selector: 'app-admin-bus',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,FormsModule],
  templateUrl: './admin-bus.component.html',
  styleUrl: './admin-bus.component.css'
})
export class AdminBusComponent {

  bus = { busName: '',capacity: '',scheduledArrivalTime: '',routes: [] as string[]};
  // busRoute = { routes: '' };

  constructor(private router: Router, private busService: BusServiceService) {}

  // busSchedules = [
  //   { id: 1, route: 'Route 1', status: 'On Time' },
  //   { id: 2, route: 'Route 2', status: 'Delayed' },
  //   // Add more bus schedules
  // ];

  busSchedules: any[] = [];

  ngOnInit() {
    // Fetch all buses when the component loads
    this.fetchBuses();
  }

  fetchBuses() {
    this.busService.getBuses().subscribe((data) => {
      this.busSchedules = data;
    }, (error) => {
      console.error("Error fetching buses: ", error);
    });
  }

  deleteBus(id: number) {
    if (confirm('Are you sure you want to delete this bus?')) {
      this.busService.deleteBus(id).subscribe(() => {
        alert('Bus deleted successfully');
        this.fetchBuses(); // Refresh the list after deletion
      }, (error) => {
        console.error("Error deleting bus: ", error);
      });
    }
  }


  onSubmit() {
    console.log(this.bus);

    // Convert routes string to an array
    this.bus.routes = this.bus.routes.toString().split(',').map(route => route.trim());

    // Call the busService to add the bus
    this.busService.addBus(this.bus).subscribe(() => {
      alert('Bus added successfully');

      // Fetch buses again to refresh the list
      this.fetchBuses();

      // Clear the form after adding
      this.bus = { busName: '', capacity: '', scheduledArrivalTime: '', routes: [] as string[] };
    }, (error) => {
      console.error("Error adding bus: ", error);
    });
  }

}
