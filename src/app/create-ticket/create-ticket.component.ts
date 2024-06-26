import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TicketServicesService } from "../core/services/ticket-services.service";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ChangeSettingsService } from "../core/services/change-settings.service";

@Component({
	selector: "app-create-ticket",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./create-ticket.component.html",
	styleUrls: ["./create-ticket.component.css"],
})
export class CreateTicketComponent implements OnInit {
	ticketForm: FormGroup;
	users: any = [];

	constructor(
		private fb: FormBuilder,
		private ticketService: TicketServicesService,
		private settingsService: ChangeSettingsService,
	) {
		this.ticketForm = this.fb.group({
			contenido: ["", Validators.required],
			categoria: ["Soporte", Validators.required],
			prioridad: [1, Validators.required],
			responsable: [0],
		});
	}

	ngOnInit(): void {
		this.getNormalUsers();
	}

	createTicket() {
		if (this.ticketForm.valid) {
			this.ticketService.createTicket(this.ticketForm.value).subscribe({
				next: () => alert("Ticket creado con éxito"),
				error: (err) => console.error("Error al crear ticket", err),
			});
		} else {
			alert("Todos los campos son obligatorios");
		}
	}
	getNormalUsers() {
		this.settingsService.getNormalUsers().subscribe({
			next: (x) => {
				this.users = x;
				console.log(this.users);
			},
		});
	}
}
