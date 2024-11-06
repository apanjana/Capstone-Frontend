import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router'; // Import Router

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink], // No need to import RouterLink here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class NavbarComponent {
  constructor(private router: Router) {} // Inject Router

  // Logout method
  logout() {
    localStorage.clear(); // Clear local storage
    this.router.navigate(['/login']); // Navigate to login page
  }
}
