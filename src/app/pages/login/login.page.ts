import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    RouterLink
  ]
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const storedUsers = localStorage.getItem('usuarios');
  
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const user = users.find((u: any) => u.email === this.email && u.password === this.password);
  
      if (user) {
        alert('Inicio de sesión exitoso');
        // Guarda el usuario activo (opcional)
        localStorage.setItem('usuarioActivo', JSON.stringify(user));
        this.router.navigate(['/dashboard']);
      } else {
        alert('Correo o contraseña incorrectos');
      }
    } else {
      alert('No hay ningún usuario registrado');
    }  
  }
  
  
}
