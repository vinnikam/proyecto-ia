import { Component, signal } from '@angular/core';
import { ChatIaComponent } from './appia/pagina/chat-ia';

@Component({
  imports: [ChatIaComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend-ia');
}
