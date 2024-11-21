import { Component,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-btn-oscuro',
  imports: [CommonModule,FormsModule],
  templateUrl: './btn-oscuro.component.html',
  styleUrl: './btn-oscuro.component.css'
})
export class BtnOscuroComponent {
  isDarkMode = false;
  // Emitir evento al componente padre
  @Output() darkModeToggle = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeToggle.emit(this.isDarkMode);
  }
}
