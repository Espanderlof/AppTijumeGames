import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RegistrarmeComponent } from './components/registrarme/registrarme.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'index', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'index', component: HomeComponent },
    { path: 'categoria/:id', component: CategoriaComponent },
    { path: 'registrarme', component: RegistrarmeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
