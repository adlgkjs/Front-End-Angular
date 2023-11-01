import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  private urlApi = 'http://127.0.0.1:8000/api/movies/';

  constructor(private http:HttpClient) { }

  public getData():Observable<any>{
    return this.http.get<any>(this.urlApi)
  }
}
