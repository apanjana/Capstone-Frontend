import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service'; // Adjust the path based on your project structure
import { RouterLink } from '@angular/router';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

@Component({
  selector: 'app-user-bus-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,NavbarUserComponent],
  templateUrl: './user-bus-book.component.html',
  styleUrls: ['./user-bus-book.component.css']
})
export class UserBusBookComponent {
  busId: number | null = null; // Model for bus ID
  passengerName: string = ''; // Model for passenger name
  bookingSuccess: boolean = false; // Success flag
  bookingError: string = ''; // Error message

  constructor(private userService: UserService) {}

  addPassenger() {
    if (this.busId && this.passengerName) {
      const passengerData = {
        busId: this.busId,
        name: this.passengerName
      };

      this.userService.addPassenger(passengerData).subscribe({
        next: () => {
          this.bookingSuccess = true;
          this.bookingError = '';
          // Reset fields
          this.busId = null;
          this.passengerName = '';
        },
        error: (error) => {
          this.bookingError = 'Failed to book bus. Please try again.';
          this.bookingSuccess = false;
          console.error('Error adding passenger:', error);
        }
      });
    } else {
      this.bookingError = 'Please provide a bus ID and name.';
      this.bookingSuccess = false;
    }
  }
}
