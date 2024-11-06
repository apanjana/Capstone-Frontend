import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9999/passengers'; // Update to your actual endpoint

  constructor(private http: HttpClient,private authservice:AuthService) {}

  deletePassenger(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url,{headers:this.authservice.getAuthHeader()});
  }

  updatePassenger(id: number, passengerData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, passengerData,{headers:this.authservice.getAuthHeader()});
  }

  // New method to add a passenger (book a bus)
  addPassenger(passengerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, passengerData,{headers:this.authservice.getAuthHeader()}); // Ensure your API can handle this
  }
}
