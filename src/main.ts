import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideHttpClient } from '@angular/common/http';  

// import * as THREE from 'three';
// import VANTA from 'vanta/dist/vanta.dots.min';

// VANTA.DOTS({
//     el: "#your-element-selector",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color: 0x585965,
//     color2: 0x626268,
//     backgroundColor: 0xccc8c8
// });

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),  // Add this to provide HttpClient in your application
//   ]
// })
// .catch(err => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
