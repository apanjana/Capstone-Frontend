// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { RouterOutlet } from '@angular/router';
// import { UserService } from '../user.service'; // Import the UserService
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-admin-user',
//   standalone: true,
//   imports: [CommonModule, RouterLink, NavbarComponent, RouterOutlet, FormsModule,HttpClientModule],
//   templateUrl: './admin-user.component.html',
//   styleUrls: ['./admin-user.component.css']
// })

// export class AdminUserComponent {
//   users = [
//     { id: 1, username: 'user1', role: 'Operator' },
//     { id: 2, username: 'user2', role: 'Passenger' },
//     // Add more users
//   ];

//   passenger = { passengerId: '' }; // Object to hold the ID of the passenger to delete

//   constructor(
//     private router: Router,
//     private userService: UserService) {
//       console.log('passenger');
//     } // Inject UserService

//   manageUser(id: number) {
//     console.log(`Manage user with ID: ${id}`);
//     // Implement user management logic here
//   }

//   deleteById() {
//     const idToDelete = Number(this.passenger.passengerId); // Convert to number
//     if (!isNaN(idToDelete)) { // Check if it's a valid number
//       this.userService.deletePassenger(idToDelete).subscribe({
//         next: response => {
//           console.log('Passenger deleted successfully:', response);
//           // Remove the deleted user from the list if it exists
//           this.users = this.users.filter(user => user.id !== idToDelete);
//           this.passenger.passengerId = ''; // Clear the input field
//         },
//         error: error => {
//           console.error('Error deleting passenger:', error);
//         }
//       });
//     } else {
//       alert('Please enter a valid passenger ID.');
//     }
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {
  users = [
    { id: 1, username: 'user1', role: 'Operator' },
    { id: 2, username: 'user2', role: 'Passenger' },
    // Add more users
  ];

  passenger = { passengerId: '' ,updatedId:'',updateName: '',updateBusId:''};

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    console.log('AdminUserComponent initialized');
  }

  manageUser(id: number) {
    console.log(`Manage user with ID: ${id}`);
    // Implement user management logic here
  }

  deleteById() {
    const idToDelete = Number(this.passenger.passengerId);
    if (!isNaN(idToDelete)) {
      this.userService.deletePassenger(idToDelete).subscribe({
        next: response => {
          console.log('Passenger deleted successfully:', response);
          alert('Passenger deleted successfully!!!');
          this.users = this.users.filter(user => user.id !== idToDelete);
          this.passenger.passengerId = '';
        },
        error: error => {
          console.error('Error deleting passenger:', error);
        }
      });
    } else {
      alert('Please enter a valid passenger ID.');
    }
  }
  updatePassenger() {
    const idToUpdate = Number(this.passenger.updatedId);
    if (!isNaN(idToUpdate)) {
      const updatedPassenger = {
        id: idToUpdate,
        name: this.passenger.updateName,
        busId: Number(this.passenger.updateBusId)
      };

      this.userService.updatePassenger(idToUpdate, updatedPassenger).subscribe({
        next: response => {
          console.log('Passenger updated successfully:', response);
          alert('Passenger updated successfully!');
          this.passenger.updatedId = '';
          this.passenger.updateName = '';
          this.passenger.updateBusId = '';
        },
        error: error => {
          console.error('Error updating passenger:', error);
        }
      });
    } else {
      alert('Please enter valid data.');
    }
  }
}
