import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Categoria {
  id: number;
  nombre: string;
  img_url: string;
  detalle: string;
  juegos: any[]; // Puedes definir una interfaz más específica para los juegos si lo deseas
}

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private jsonUrl = 'assets/db/juegos.json';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<{categorias: Categoria[]}>(this.jsonUrl).pipe(
      map(response => response.categorias)
    );
  }
}