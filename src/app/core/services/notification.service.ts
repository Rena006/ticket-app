import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from "./common";

@Injectable({
	providedIn: "root",
})
export class NotificationService {
	constructor(private http: HttpClient) {}

  getNotifications(): Observable<any> {
    return this.http.get(`${API_URL}/notifications`);
  }

  markAsRead(id: number): Observable<any> {
    return this.http.post(`${API_URL}/notifications/markAsRead`, { id });
  }
}
