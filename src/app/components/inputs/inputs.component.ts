import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ContraComponent } from './contra/contra.component';
import { EmailComponent } from './email/email.component';
import { TxtComponent } from './txt/txt.component';

@Component({
  selector: 'app-inputs',
  imports: [ContraComponent, EmailComponent, TxtComponent],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {

}
