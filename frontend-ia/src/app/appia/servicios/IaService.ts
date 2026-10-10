import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatResponse {
  respuesta: string;
}

@Injectable({ providedIn: 'root' })
export class IaService {
  private http = inject(HttpClient);
  private readonly url = 'http://localhost:8080/api/ia/chat';

  chat(mensaje: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.url, { mensaje });
  }
}
