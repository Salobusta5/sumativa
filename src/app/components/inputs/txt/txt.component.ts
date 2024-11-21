import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-txt',
  imports: [CommonModule, FormsModule],
  templateUrl: './txt.component.html',
  styleUrl: './txt.component.css'
})
export class TxtComponent {
  @Input() texto = '';
  @Output() textoChange = new EventEmitter<string>();

  textoInvalido = false;

  onTextoChange() {
    this.textoInvalido = this.texto.trim().length === 0;
    this.textoChange.emit(this.texto);
  }
}
