import { Component,Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-email',
  imports: [CommonModule, FormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  @Input() email = '';
  @Output() emailChange = new EventEmitter<string>();

  isValidEmail = true;

  validateEmail() {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.isValidEmail = emailPattern.test(this.email);
    this.emailChange.emit(this.email);
  }
}
