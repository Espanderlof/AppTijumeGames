import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarmeComponent } from './registrarme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing'; // Importa el módulo de pruebas para rutas

describe('RegistrarmeComponent', () => {
  let component: RegistrarmeComponent;
  let fixture: ComponentFixture<RegistrarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RegistrarmeComponent, // Importa el componente standalone
        RouterTestingModule // Importa el módulo de pruebas para rutas
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verificar que el formulario muestra errores de validación cuando está vacío y se intenta enviar.
  it('should show errors when form is empty and submitted', () => {
    component.submitForm();
    fixture.detectChanges();
    
    const nombreCompletoErrors = component.miFormulario.get('nombreCompleto')?.errors;
    const nombreUsuarioErrors = component.miFormulario.get('nombreUsuario')?.errors;
    const correoElectronicoErrors = component.miFormulario.get('correoElectronico')?.errors;
    const contrasenaErrors = component.miFormulario.get('contrasena')?.errors;
    const repetirContrasenaErrors = component.miFormulario.get('repetirContrasena')?.errors;
    const fechaNacimientoErrors = component.miFormulario.get('fechaNacimiento')?.errors;

    expect(nombreCompletoErrors?.['required']).toBeTruthy();
    expect(nombreUsuarioErrors?.['required']).toBeTruthy();
    expect(correoElectronicoErrors?.['required']).toBeTruthy();
    expect(contrasenaErrors?.['required']).toBeTruthy();
    expect(repetirContrasenaErrors?.['required']).toBeTruthy();
    expect(fechaNacimientoErrors?.['required']).toBeTruthy();
  });

  // Verificar que el formulario es válido cuando se llenan todos los campos correctamente.
  it('should be valid when form is filled correctly', () => {
    component.miFormulario.setValue({
      nombreCompleto: 'JAIME ZAPATA SALINAS',
      nombreUsuario: 'JZAPATA',
      correoElectronico: 'JZAPATA@CRELL.CL',
      contrasena: 'Password123#',
      repetirContrasena: 'Password123#',
      fechaNacimiento: '1993-05-22',
      direccionDespacho: 'CANAL SARMIENTO #6412, PUERTA SUR'
    });

    expect(component.miFormulario.valid).toBeTruthy();
  });

});
