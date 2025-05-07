import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'usuarios';
  private readonly AUTH_KEY = 'isAuthenticated';
  private readonly ACTIVE_USER_KEY = 'activeUser';

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');

    const matchedUser = users.find((user: any) =>
      user.email.toLowerCase() === email.toLowerCase() && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem(this.AUTH_KEY, 'true');
      localStorage.setItem(this.ACTIVE_USER_KEY, JSON.stringify(matchedUser));
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.ACTIVE_USER_KEY);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }

  getActiveUser(): any {
    return JSON.parse(localStorage.getItem(this.ACTIVE_USER_KEY) || 'null');
  }
}
