import { Component } from '@angular/core';
import { ApiMoviesService } from '../service/api-movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  data:any[]=[]; //creo un array vacio

  constructor(private apiService:ApiMoviesService){}

  ngOnInit():void{
    this.llenarData();
  }

  llenarData(){
      this.apiService.getData().subscribe(data => {
        this.data = data;
        console.log(this.data);
      })
  }

}
