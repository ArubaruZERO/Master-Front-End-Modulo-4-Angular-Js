import { Injectable } from '@angular/core';
import { LoginEntity } from '../model/LoginEntity';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logged: Boolean;
  member: LoginEntity;

  constructor() {
    this.logged = localStorage.getItem('user') !== null;
    this.member = {
      user: '',
      password: '',
    };
  }

  login({ user, password }: LoginEntity): boolean {
    const userLogin: LoginEntity = { user, password };
    if (userLogin.user === 'admin' && userLogin.password === 'test') {
      localStorage.setItem('user', userLogin.user);
      this.logged = true;
      this.member = { ...userLogin };
      return true;
    } else {
      return false;
    }
  }

  isLogged(): Boolean {
    return this.logged;
  }
  logout(): void {
    if (this.logged) {
      localStorage.removeItem('user');

      this.logged = false;
      this.member = {
        user: '',
        password: '',
      };
    }
  }
}
