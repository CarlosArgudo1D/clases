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
    FormsModule,
    CommonModule,
    IonicModule
  ]
})
export class DashboardPage implements OnInit {
  usuarios: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const storedUsers = localStorage.getItem('usuarios');
    if (storedUsers) {
      this.usuarios = JSON.parse(storedUsers);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
