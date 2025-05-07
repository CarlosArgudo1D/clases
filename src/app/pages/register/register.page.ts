import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink
  ]
})
export class RegisterPage {
  correo: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    const nuevoUsuario = {
      email: this.correo,
      password: this.password
    };
  
    // Obtener lista actual de usuarios, o un array vacío si no existe
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  
    // Verificar si el correo ya está registrado
    const existe = usuarios.some((u: any) => u.email === this.correo);
    if (existe) {
      alert('El correo ya está registrado');
      return;
    }
  
    // Agregar el nuevo usuario
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
    alert('Cuenta creada exitosamente');
    this.router.navigate(['/login']);
  }  
}




