import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registrarme',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrarme.component.html',
  styleUrls: ['./registrarme.component.scss']
})
export class RegistrarmeComponent {
  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(100)]],
      nombreUsuario: ['', [Validators.required, Validators.maxLength(100)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18), Validators.pattern('^(?=.*[A-Z])(?=.*\\d).+$')]],
      repetirContrasena: ['', [Validators.required, this.passwordsMatch]],
      fechaNacimiento: ['', [Validators.required, this.ageValidator]],
      direccionDespacho: ['', [Validators.maxLength(250)]]
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.miFormulario.valid) {
      console.log('submitForm valido');
      this.miFormulario.reset();
    } else {
      console.log('submitForm invalido');
      this.miFormulario.markAllAsTouched();
    }
  }

  registroUsuarioLimpiarForm(): void {
    this.miFormulario.reset();
  }

  passwordsMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (control.parent) {
      const password = control.parent.get('contrasena')?.value;
      const confirmPassword = control.value;

      if (password && confirmPassword && password !== confirmPassword) {
        return { passwordMismatch: true };
      }
    }

    return null;
  }

  ageValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const birthDate = new Date(control.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= 13 ? null : { ageInvalid: true };
  }
}
