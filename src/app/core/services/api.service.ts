import {Injectable} from "@angular/core";
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {

  headers: HttpHeaders;
  baseUrl: string = environment.BASE_URL;

  constructor(private _client: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  get<T>(endpoint: string): Observable<T> {
    return this._client.get<T>(`${this.baseUrl}/${endpoint}`, {headers: this.headers});
  }

  post<T>(endpoint: string, data: T): Observable<T> {
    return this._client.post<T>(`${this.baseUrl}/${endpoint}`, data, {headers: this.headers});
  }

  put<T>(endpoint: string, data: T): Observable<T> {
    return this._client.put<T>(`${this.baseUrl}/${endpoint}`, data, {headers: this.headers});
  }

  delete<T>(endpoint: string): Observable<T> {
    return this._client.delete<T>(`${this.baseUrl}/${endpoint}`, {headers: this.headers});
  }
}
