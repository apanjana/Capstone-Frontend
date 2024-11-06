// login-signup-modal.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup-modal',
  templateUrl: './login-signup-modal.component.html',
  styleUrls: ['./login-signup-modal.component.css']
})
export class LoginSignupModalComponent {
  isLoginMode = true;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onToggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(email: string, password: string) {
    if (this.isLoginMode) {
      // Login logic
      this.authService.authenticate(email, password).subscribe({
        next: (response) => {
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/user-home']); // Change as per your redirection route
        },
        error: (error) => this.errorMessage = error.message || 'Login failed.'
      });
    } else {
      // Signup logic
      this.authService.signup(email, password).subscribe({
        next: () => {
          this.router.navigate(['/welcome']); // Adjust redirection as needed
        },
        error: (error) => this.errorMessage = error.message || 'Signup failed.'
      });
    }
  }
}
