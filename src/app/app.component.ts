import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminBusComponent } from './admin-bus/admin-bus.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { UserBusPageComponent} from './user-bus-page/user-bus-page.component';
import {UserBusBookComponent} from './user-bus-book/user-bus-book.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    NavbarUserComponent,
    AdminBusComponent,
    AdminMainPageComponent,
    AdminUserComponent,
    NavbarComponent,
    UserBusPageComponent,
    UserBusBookComponent,
    UserprofileComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Change styleUrl to styleUrls
})
export class AppComponent {
  title = 'bus-transport-real';
}
