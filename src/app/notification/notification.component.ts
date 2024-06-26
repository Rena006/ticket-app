import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: { id: number, content: string, read: boolean }[] = [];
  dropdownVisible = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getTickets().subscribe((tickets: any[]) => {
      this.notifications = tickets.map(ticket => ({
        id: ticket.ticketID,
        content: ticket.contenido,
        read: false
      }));
    });
  }

  markAsRead(id: number): void {
    const notification = this.notifications.find(n => n.id === id);
    if (notification) {
      notification.read = true;
      this.notificationService.markAsRead(id).subscribe();
    }
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  clearNotifications(): void {
    this.notifications = [];
  }
}
