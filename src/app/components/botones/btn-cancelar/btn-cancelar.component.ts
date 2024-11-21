import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-cancelar',
  imports: [],
  templateUrl: './btn-cancelar.component.html',
  styleUrl: './btn-cancelar.component.css'
})
export class BtnCancelarComponent {
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
