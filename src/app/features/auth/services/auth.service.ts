import { Injectable, inject } from '@angular/core';
import { AuthDAO } from './auth-dao.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authDAO = inject(AuthDAO);

  authenticateUser(user: unknown): Observable<string> {
    return this.authDAO.authenticateUser(user);
  }

  registerUser(user: unknown): boolean {
    return this.authDAO.registerUser(user);
  }

  getUser(user: unknown): boolean {
    return this.authDAO.getUser(user);
  }
}
