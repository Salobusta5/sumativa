import { Component, Output, EventEmitter,Input  } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-btn-primario',
  imports: [NgIf],
  templateUrl: './btn-primario.component.html',
  styleUrl: './btn-primario.component.css'
})
export class BtnPrimarioComponent {
  @Input() isLoading: boolean = false;
  @Output() click = new EventEmitter<void>();

  showImage: boolean = false;

  handleClick() {
    this.isLoading = true;
    this.click.emit();
    setTimeout(() => {
      this.isLoading = false;
      this.showImage = true; // Mostrar el popup después de 3 segundos
    }, 3000);
  }

  handleClosePopup() {
    this.showImage = false; // Cerrar el popup
  }

}
