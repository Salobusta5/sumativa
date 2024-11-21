import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-aceptar',
  imports: [],
  templateUrl: './btn-aceptar.component.html',
  styleUrl: './btn-aceptar.component.css'
})
export class BtnAceptarComponent {
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
