import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { JuegosService, Categoria } from '../../services/juegos.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {
  categoria: Categoria | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private juegosService: JuegosService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.juegosService.getCategorias().pipe(
          switchMap(categorias => {
            this.categoria = categorias.find(cat => cat.id.toString() === id);
            return [];
          })
        );
      })
    ).subscribe();
  }
}