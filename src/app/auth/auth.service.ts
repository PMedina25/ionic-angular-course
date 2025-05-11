import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;

  get userIsAuthenticated(): boolean {
    return this._userIsAuthenticated;
  }

  login(): void {
    this._userIsAuthenticated = true;
  }

  logout(): void {
    this._userIsAuthenticated = false;
  }
}
