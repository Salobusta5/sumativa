import { Component, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-btn-secundario',
  imports: [NgIf],
  templateUrl: './btn-secundario.component.html',
  styleUrl: './btn-secundario.component.css'
})
export class BtnSecundarioComponent {
  @Output() onClick = new EventEmitter<void>();
  isPressed: boolean = false; // Indicador de si el botón está siendo presionado

  // Cuando se presiona el botón
  onMouseDown() {
    this.isPressed = true;
    this.onClick.emit(); // Emitir evento hacia el componente padre
  }

  // Cuando se suelta el botón
  onMouseUp() {
    this.isPressed = false;
  }

  // Asegurarnos de que el estado también se resetea si el mouse se va
  onMouseLeave() {
    this.isPressed = false;
  }
}
