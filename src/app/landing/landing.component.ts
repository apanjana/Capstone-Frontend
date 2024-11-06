import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
// import { LoginSignupModalComponent } from '../login-signup-modal/login-signup-modal.component';
import { LoginComponent } from '../login/login.component';
// import { LoginSignupModalComponent } from '../login-signup-modal/login-signup-modal.component';
// import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule , LoginComponent,RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  // showLoginModal = false;

  // openLoginModal() {
  //   this.showLoginModal = true;
  // }

  // closeLoginModal() {
  //   this.showLoginModal = false;
  // }
}