import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoriasComponent } from '../categorias/categorias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
