import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contra',
  imports: [CommonModule, FormsModule],
  templateUrl: './contra.component.html',
  styleUrl: './contra.component.css'
})
export class ContraComponent {
  @Input() password = '';
  @Output() passwordChange = new EventEmitter<string>();

  passwordInvalida = false;

  onPasswordChange() {
    const tieneMayuscula = /[A-Z]/.test(this.password);
    const tieneLongitudSuficiente = this.password.length >= 6;

    this.passwordInvalida = !(tieneMayuscula && tieneLongitudSuficiente);
    this.passwordChange.emit(this.password);
  }
}
