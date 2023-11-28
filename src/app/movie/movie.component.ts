import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../service/api-movies.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{ //agrege implements OnInit

  listMovies:any=[]; //quite [] antes de igual
  
  constructor(public cs:ApiMoviesService, private router:Router){ //private apiService:ApiMoviesService
  
  }

  ngOnInit():void{
    this.llenarData();
  }

  // Consultar
  llenarData(){
      return this.cs.getMovie().subscribe((data:{}) => {        
        this.listMovies = data;               
      })
  }

  onedit(movie:Movie){
    this.cs.selectMovie = Object.assign({},movie);
    this.router.navigate(["/add-movie"]);
  }

  ondelete(id:number){
    this.cs.deleteMovie(id).subscribe((response)=>{
      this.llenarData();
    });
  }  
}
