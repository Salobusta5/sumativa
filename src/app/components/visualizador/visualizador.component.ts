import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TxtComponent } from '../inputs/txt/txt.component';
@Component({
  selector: 'app-visualizador',
  imports: [CommonModule,FormsModule, TxtComponent],
  templateUrl: './visualizador.component.html',
  styleUrl: './visualizador.component.css'
})
export class VisualizadorComponent {
  @Input() email = '';
  @Input() password = '';
  @Input() texto = '';
  color = 'magenta';
  @Input() isDarkMode: boolean = false; 
  animateSquare() {
    this.color = this.color === 'magenta' ? 'cyan' : 'magenta';
  }
}
