import { Component, Output, EventEmitter  } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-btn-primario',
  imports: [NgIf],
  templateUrl: './btn-primario.component.html',
  styleUrl: './btn-primario.component.css'
})
export class BtnPrimarioComponent {
  @Output() onClick = new EventEmitter<void>();
  isLoading: boolean = false;

  handleClick() {
    this.isLoading = true;
    this.onClick.emit(); // Emitir el evento hacia el componente padre
  }

  stopLoading() {
    this.isLoading = false;
  }
}
