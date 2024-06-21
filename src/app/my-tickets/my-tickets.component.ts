import { Component } from "@angular/core";
import { TicketServicesService } from "../core/services/ticket-services.service";
import { TicketInterface } from "../interfaces/ticket.interface";

@Component({
	selector: "app-my-tickets",
	standalone: true,
	imports: [],
	templateUrl: "./my-tickets.component.html",
	styleUrl: "./my-tickets.component.css",
})
export class MyTicketsComponent {
	constructor(private ticketServices: TicketServicesService) {}

	tickets_owned: TicketInterface[] = [];
	tickets_pending: TicketInterface[] = [];
	ticketLength = 0;

	ngOnInit(): void {
		this.ticketServices.getTicketsByAuthor().subscribe({
			next: (data) => {
				console.log("owned: ", data);
				this.tickets_owned = data;
			},
		});
		this.ticketServices.getTicketsByResponsable().subscribe({
			next: (data) => {
				console.log("pending: ", data);
				this.tickets_pending = data;
			},
		});
	}
}
