import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../movie';


@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  urlApi = 'http://127.0.0.1:8000/api/movies/';
  
  reqHeader = new HttpHeaders({
    'Content-Type':'aplication/json'
  })

  selectMovie:Movie=new Movie();

  constructor(private http:HttpClient) { }

  // Consultar datos
  getMovie():Observable<Movie>{ //sustitui any por Movie
    return this.http.get<Movie>(this.urlApi);
  }

  createMovie(movie:Movie):Observable<Movie>{
    return this.http.post(this.urlApi, movie, {headers:this.reqHeader});
  }

  updateMovie(id:number, movie:Movie){
    return this.http.put(this.urlApi + id + '/', movie, {headers:this.reqHeader});
  }
  
  deleteMovie(id:number){
    return this.http.delete(this.urlApi + id + '/');
  }
}
