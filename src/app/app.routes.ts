import { Routes } from '@angular/router';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { AdminBusComponent } from './admin-bus/admin-bus.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserMainPageComponent } from './user-main-page/user-main-page.component';
// import { LoginComponent } from './login/login.component';
import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { UserBusPageComponent} from './user-bus-page/user-bus-page.component';
import {UserBusBookComponent} from './user-bus-book/user-bus-book.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MapComponent } from './map/map.component';
import { LandingComponent } from './landing/landing.component';



// export const routes: Routes = [
//     { path: '', component:AdminMainPageComponent },
//     { path: 'bus', component:AdminBusComponent },
//     { path: 'user', component:AdminUserComponent}
// ];

// export const routes: Routes = [
//     { path: '', component:UserMainPageComponent },
//     { path: 'bus', component:AdminBusComponent },
//     { path: 'user', component:AdminUserComponent}
// ];

export const routes: Routes = [
    // { path: '', component:LoginComponent },
    { path: '', component: LandingComponent },
    { path: 'login', component:LoginComponent },
    { path: 'admin', component:AdminMainPageComponent },
    { path: 'admin/bus', component:AdminBusComponent },
    { path: 'admin/user', component:AdminUserComponent},
    { path: 'user', component:UserMainPageComponent },
    { path: 'user/bus', component:UserBusPageComponent},
    { path: 'user/book', component:UserBusBookComponent},
    { path: 'user/profile', component:UserprofileComponent}


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
