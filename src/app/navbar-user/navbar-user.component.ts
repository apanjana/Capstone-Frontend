import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {
  constructor(private router: Router) {} // Inject Router

  // Logout method
  logout() {
    localStorage.clear(); // Clear local storage
    this.router.navigate(['/login']); // Navigate to login page
  }

}
