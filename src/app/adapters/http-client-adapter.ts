import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpAdapter } from './http-adapter.interface';

@Injectable()
export class HttpClientAdapter implements HttpAdapter {

    private http = inject(HttpClient);

    get(url: string, options?: any): Observable<any> {
        return this.http.get(url, options);
    }

    post(url: string, body: any, options?: any): Observable<any> {
        return this.http.post(url, body, options);
    }

    put(url: string, body: any, options?: any): Observable<any> {
        return this.http.put(url, body, options);
    }

    delete(url: string, options?: any): Observable<any> {
        return this.http.delete(url, options);
    }
}
