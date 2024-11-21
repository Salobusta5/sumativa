import { Component } from '@angular/core';
import { BtnAceptarComponent } from './btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from './btn-cancelar/btn-cancelar.component';
import { BtnOscuroComponent } from './btn-oscuro/btn-oscuro.component';
import { BtnPrimarioComponent } from './btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from './btn-secundario/btn-secundario.component';

@Component({
  selector: 'app-botones',
  imports: [BtnAceptarComponent,BtnCancelarComponent, BtnOscuroComponent,BtnPrimarioComponent, BtnSecundarioComponent],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  onButtonClick(buttonType: string) {
    console.log(`Botón ${buttonType} presionado`);
  }
}
