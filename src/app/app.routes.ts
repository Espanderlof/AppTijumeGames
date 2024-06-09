import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RegistrarmeComponent } from './components/registrarme/registrarme.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'index', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    // { path: 'home', component: HomeComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'categoria/:id', component: CategoriaComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'registrarme', component: RegistrarmeComponent },
    { path: 'cart', component: CartComponent },
    // { path: 'footer', component: FooterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
