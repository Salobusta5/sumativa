import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-btn-aceptar',
  imports: [FormsModule, CommonModule],
  templateUrl: './btn-aceptar.component.html',
  styleUrl: './btn-aceptar.component.css'
})
export class BtnAceptarComponent {
  @Output() buttonClick = new EventEmitter<string>(); 
  showMessage: boolean = false;

  onClick() {
    this.buttonClick.emit('Aceptar');
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 3000); 
  }
}
