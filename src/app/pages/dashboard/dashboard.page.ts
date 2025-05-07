import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.page.html',
standalone: true,
styleUrls: ['./dashboard.page.scss'],
imports: [
CommonModule,
FormsModule,
IonicModule ]
})
export class DashboardPage implements OnInit {
usuarios: any[] = [];

constructor(private router: Router) {}

ngOnInit() {
// Verifica si hay un usuario logueado con la clave correcta
const currentUser = localStorage.getItem('usuarioActivo');
if (!currentUser) {
this.router.navigate(['/login']);
return;
}

// Carga la lista de usuarios si existe
const storedUsers = localStorage.getItem('usuarios');
if (storedUsers) {
  this.usuarios = JSON.parse(storedUsers);
}
}

logout() {
// Elimina el usuario en sesión y redirige al login
localStorage.removeItem('usuarioActivo');
this.router.navigate(['/login']);
}
}