import { Component } from '@angular/core';

@Component({
  selector: 'app-registrarme',
  standalone: true,
  imports: [],
  templateUrl: './registrarme.component.html',
  styleUrl: './registrarme.component.scss'
})
export class RegistrarmeComponent {
  registroUsuarioLimpiarForm() {
    console.log("limpiar");
    (document.querySelector("#nombreCompleto") as HTMLInputElement).value = "";
    (document.querySelector("#nombreUsuario") as HTMLInputElement).value = "";
    (document.querySelector("#correoElectronico") as HTMLInputElement).value = "";
    (document.querySelector("#contrasena") as HTMLInputElement).value = "";
    (document.querySelector("#repetirContrasena") as HTMLInputElement).value = "";
    (document.querySelector("#fechaNacimiento") as HTMLInputElement).value = "";
    (document.querySelector("#direccionDespacho") as HTMLTextAreaElement).value = "";
  }

  registroUsuarioValidar() {
    const nombreCompleto = (document.querySelector("#nombreCompleto") as HTMLInputElement).value.trim();
    const nombreUsuario = (document.querySelector("#nombreUsuario") as HTMLInputElement).value.trim();
    const correoElectronico = (document.querySelector("#correoElectronico") as HTMLInputElement).value.trim();
    const contrasena = (document.querySelector("#contrasena") as HTMLInputElement).value.trim();
    const repetirContrasena = (document.querySelector("#repetirContrasena") as HTMLInputElement).value.trim();
    const fechaNacimiento = (document.querySelector("#fechaNacimiento") as HTMLInputElement).value.trim();
    const direccionDespacho = (document.querySelector("#direccionDespacho") as HTMLTextAreaElement).value.trim();

    // Resto de la lógica de validación...

    // Si todas las validaciones pasan, se puede enviar el formulario
    alert("Registro correcto. ¡Bienvenido a TIJUME GAMES!");
    return true;
  }
}
