import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IaService } from '../servicios/IaService';

@Component({
  selector: 'app-chat-ia',
  standalone: true,
  imports: [FormsModule],
  template: `
    <textarea [(ngModel)]="mensaje" placeholder="Escribe tu pregunta"></textarea>
    <button (click)="enviar()" [disabled]="cargando() || !mensaje.trim()">Enviar</button>

    @if (cargando()) {
      <p>Pensando...</p>
    }
    @if (error()) {
      <p class="error">{{ error() }}</p>
    }
    @if (respuesta()) {
      <p>{{ respuesta() }}</p>
    }
  `,
})
export class ChatIaComponent {
  private ia = inject(IaService);

  mensaje = '';
  respuesta = signal('');
  cargando = signal(false);
  error = signal('');

  enviar() {
    this.cargando.set(true);
    this.error.set('');
    this.ia.chat(this.mensaje).subscribe({
      next: (r) => {
        this.respuesta.set(r.respuesta);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudo obtener respuesta');
        this.cargando.set(false);
      },
    });
  }
}
