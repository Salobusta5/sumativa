import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-secundario',
  imports: [],
  templateUrl: './btn-secundario.component.html',
  styleUrl: './btn-secundario.component.css'
})
export class BtnSecundarioComponent {
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
