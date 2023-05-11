import { Observable } from "rxjs";

export abstract class HttpAdapter {
    abstract get(url: string, options?: any): Observable<any>;
    abstract post(url: string, body: any, options?: any): Observable<any>;
    abstract put(url: string, body: any, options?: any): Observable<any>;
    abstract delete(url: string, options?: any): Observable<any>;
}
