import {
  Component,
  ElementRef,
  output,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private readonly form = viewChild<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; text: string }>();

  title = signal<string>('');
  request = signal<string>('');

  onSubmit() {
    this.add.emit({ title: this.title(), text: this.request() });
    this.form()?.nativeElement.reset();
  }
}
