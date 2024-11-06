import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  register(name: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(name, value);
    }
  }

  getToken(name: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(name) as string;
    }
    return null;
  }
}
