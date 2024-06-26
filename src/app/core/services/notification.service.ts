import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  getTickets(): Observable<any> {
    return this.http.get(`/get_tickets`);
  }

  markAsRead(id: number): Observable<any> {
    return of(null); 
  }
}
