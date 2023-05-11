import { Observable } from "rxjs";

export abstract class AuthDAO {
  abstract authenticateUser(user: unknown):Observable<string>;
  abstract registerUser(usuario: unknown): boolean;
  abstract getUser(usuario: unknown): boolean;
  }