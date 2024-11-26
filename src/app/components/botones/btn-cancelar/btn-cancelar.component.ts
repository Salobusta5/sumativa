import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-cancelar',
  imports: [],
  templateUrl: './btn-cancelar.component.html',
  styleUrl: './btn-cancelar.component.css'
})
export class BtnCancelarComponent {
  @Output() cancelClick = new EventEmitter<void>();

  onClick() {
    this.cancelClick.emit(); // Emitir el evento al hacer clic
  }
}
