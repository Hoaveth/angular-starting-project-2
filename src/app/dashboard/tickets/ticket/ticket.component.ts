import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  complete = output<string>();
  detailsVisibile = signal(false);

  onToggleDetails() {
    this.detailsVisibile.set(!this.detailsVisibile());
  }

  onComplete(id: string) {
    this.complete.emit(id);
  }
}
