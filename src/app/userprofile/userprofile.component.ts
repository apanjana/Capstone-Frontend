import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SessionService } from '../session.service';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarUserComponent, RouterOutlet],
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user: User | null = null;  // Variable to store the user profile data

  constructor(private router: Router , private sessionService:SessionService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    // Retrieve the logged-in user's email from localStorage
    const loggedInUsername = this.sessionService.getToken('username');
    // const loggedInUsername = localStorage.getItem('username');

    if (loggedInUsername) {
      // Retrieve the stored users array from localStorage
      const userData = this.sessionService.getToken('user');
      // const userData = localStorage.getItem('user');
      console.log('User data from localStorage:', userData);

      if (userData) {
        try {
          const users = JSON.parse(userData);  // Parse the user data array

          // Find the user who matches the logged-in email
          const currentUser = users.find((user: User) => user.email === loggedInUsername);

          if (currentUser) {
            // Set the found user data to be displayed
            this.user = currentUser;
            console.log('Parsed user data:', this.user);
          } else {
            console.warn('No matching user found for the logged-in email.');
          }

        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      } else {
        console.warn('No user data found in localStorage.');
      }
    } else {
      console.warn('No logged-in username found in localStorage.');
    }
  }

}
