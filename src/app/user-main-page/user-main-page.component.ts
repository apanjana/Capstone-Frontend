import { Component, OnInit } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from '../map/map.component'; // Import MapComponent
import { SessionService } from '../session.service';


interface UserProfile {
  fullName: string;
  email: string;
}

@Component({
  selector: 'app-user-main-page',
  standalone: true,
  imports: [NavbarUserComponent, RouterLink, RouterOutlet, MapComponent], // Add MapComponent
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent implements OnInit {

  username: string = ''; // Variable to store the username (email)
  userProfile: UserProfile = { fullName: '', email: '' }; // Store the user profile

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.loadUserProfile(); // Load the logged-in user's profile
  }

  loadUserProfile(): void {
    // Retrieve the username (email) of the logged-in user
    const loggedInUsername = this.sessionService.getToken('username');
    console.log('logged in : ' , loggedInUsername);
    if (loggedInUsername) {
      // Retrieve the user array stored in localStorage
      // const usersData = localStorage.getItem('user');
      const usersData = this.sessionService.getToken('user');
      console.log('user : ' , usersData);
      if (usersData) {
        try {
          const users = JSON.parse(usersData);
          console.log('users : ' , users);
          // Search for the logged-in user in the stored users array
          const currentUser = users.find((user: any) => user.email === loggedInUsername);
          console.log('currentUser : ' , currentUser);
          if (currentUser) {
            // Set the full name and email of the logged-in user
            this.userProfile.fullName = `${currentUser.firstName} ${currentUser.lastName}`;
            this.userProfile.email = currentUser.email;
            this.username = currentUser.firstName;
          } else {
            console.warn('Logged-in user not found in stored users array.');
          }
        } catch (error) {
          console.error('Error parsing users data:', error);
        }
      } else {
        console.warn('No users data found in localStorage.');
      }
    } else {
      console.warn('No logged-in username found in localStorage.');
    }
  }
}
