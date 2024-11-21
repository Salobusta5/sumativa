import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from './components/inputs/inputs.component';
import { VisualizadorComponent } from './components/visualizador/visualizador.component';
import { EmailComponent } from './components/inputs/email/email.component';
import { ContraComponent } from './components/inputs/contra/contra.component';
import { BtnAceptarComponent } from './components/botones/btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from './components/botones/btn-cancelar/btn-cancelar.component';
import { BtnOscuroComponent } from './components/botones/btn-oscuro/btn-oscuro.component';
import { BtnPrimarioComponent } from './components/botones/btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from './components/botones/btn-secundario/btn-secundario.component';
import { TxtComponent } from './components/inputs/txt/txt.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            InputsComponent, 
            VisualizadorComponent,
            EmailComponent, 
            ContraComponent, 
            TxtComponent, 
            BtnAceptarComponent, 
            BtnCancelarComponent, 
            BtnOscuroComponent, 
            BtnPrimarioComponent, 
            BtnSecundarioComponent,
             NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  email = '';
  password = '';
  texto = '';
  isDarkMode = false;
  message = '';
  showMessage = false;

  onAceptar() {
    console.log('Botón Aceptar clickeado');
  }

  onCancelar() { 
    console.log('Botón Cancelar clickeado');
  }


  handlePrimarioClick() {
    this.message = 'Botón Primario clickeado';
        this.showMessage = true;
         setTimeout(() => {
                this.showMessage = false;
                this.message = '';
            }, 3000);
    
  }

  handleSecundarioClick() {
    console.log('Botón Secundario clickeado');
  }
  // Método que activa el cambio entre el modo oscuro y claro
onDarkModeToggle(isDark: boolean) {
  this.isDarkMode = isDark; // Cambia el valor de isDarkMode según el parámetro recibido
}
isLoading: boolean = false;

  onButtonClick() {
    this.isLoading = true;
    // Simulación de una llamada a un servicio o proceso asíncrono
    setTimeout(() => {
      this.isLoading = false;  // Detener el estado de carga
      console.log('Proceso completado');
    }, 3000);  // Simulando un retraso de 3 segundos
  }

  onButtonClick2() {
    console.log('Botón clickeado, proceso iniciado...');
    alert("Hola Mundo");
  }
}
