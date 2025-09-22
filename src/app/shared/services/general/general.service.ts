import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[] };
}

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private http = inject(HttpClient);

  /**
    * Petición GET
    * @param endpoint - Endpoint de la API
    * @param options - Opciones adicionales (headers, params)
    * @returns Observable con la respuesta
    */
  get<T>(endpoint: string, options?: HttpOptions): Observable<T> {
    const url = `${endpoint}`;
    return this.http.get<T>(url, options);
  }

  /**
     * Petición POST
     * @param endpoint - Endpoint de la API
     * @param data - Datos a enviar
     * @param options - Opciones adicionales (headers, params)
     * @returns Observable con la respuesta
     */
  post<T>(endpoint: string, data: any, options?: HttpOptions): Observable<T> {
    const url = `${endpoint}`;
    return this.http.post<T>(url, data, options);
  }

  /**
   * Petición PUT
   * @param endpoint - Endpoint de la API
   * @param data - Datos a actualizar
   * @param options - Opciones adicionales (headers, params)
   * @returns Observable con la respuesta
   */
  put<T>(endpoint: string, data: any, options?: HttpOptions): Observable<T> {
    const url = `${endpoint}`;
    return this.http.put<T>(url, data, options);
  }

  /**
   * Petición PATCH
   * @param endpoint - Endpoint de la API
   * @param data - Datos parciales a actualizar
   * @param options - Opciones adicionales (headers, params)
   * @returns Observable con la respuesta
   */
  patch<T>(endpoint: string, data: any, options?: HttpOptions): Observable<T> {
    const url = `${endpoint}`;
    return this.http.patch<T>(url, data, options);
  }

  /**
   * Petición DELETE
   * @param endpoint - Endpoint de la API
   * @param options - Opciones adicionales (headers, params)
   * @returns Observable con la respuesta
   */
  delete<T>(endpoint: string, options?: HttpOptions): Observable<T> {
    const url = `${endpoint}`;
    return this.http.delete<T>(url, options);
  }

  /**
   * Configura headers por defecto para autenticación
   * @param token - Token de autenticación
   * @returns HttpHeaders configurados
   */
  getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  /**
   * Configura headers básicos
   * @returns HttpHeaders básicos
   */
  getDefaultHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  /**
   * Construye parámetros de consulta
   * @param params - Objeto con los parámetros
   * @returns HttpParams configurados
   */
  buildParams(params: any): HttpParams {
    let httpParams = new HttpParams();

    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined) {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });

    return httpParams;
  }

  /**
   * Método de conveniencia para peticiones con autenticación
   * @param endpoint - Endpoint de la API
   * @param token - Token de autenticación
   * @returns Observable con la respuesta
   */
  getWithAuth<T>(endpoint: string, token: string): Observable<T> {
    const options = { headers: this.getAuthHeaders(token) };
    return this.get<T>(endpoint, options);
  }

  /**
   * Método de conveniencia para POST con autenticación
   * @param endpoint - Endpoint de la API
   * @param data - Datos a enviar
   * @param token - Token de autenticación
   * @returns Observable con la respuesta
   */
  postWithAuth<T>(endpoint: string, data: any, token: string): Observable<T> {
    const options = { headers: this.getAuthHeaders(token) };
    return this.post<T>(endpoint, data, options);
  }
}
