import { Observable, of } from "rxjs";
import { AuthDAO } from "./auth-dao.interface";
import { HttpAdapter } from "../../../adapters/http-adapter.interface";
import { inject } from "@angular/core";
import { environment } from '../../../../environments/environment';
import { HttpConstants } from "src/app/http/http-constants";

export class AuthDAOImpl implements AuthDAO {
    baseUrl = environment.api;
    httpAdapter = inject(HttpAdapter);

    authenticateUser(user: unknown): Observable<string> {
        return this.httpAdapter.get(this.baseUrl + HttpConstants.users);
    }

    registerUser(usuario: unknown): boolean {
        return true;
    }
    
    getUser(usuario: unknown): boolean {
        return true;
    }
}