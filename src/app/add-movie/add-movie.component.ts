import { Component } from '@angular/core';
import { ApiMoviesService } from '../service/api-movies.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  constructor(public cs:ApiMoviesService, private router:Router){

  }

  ngOnInit(): void{
    
  }

  submitForm(movieForm:NgForm){  
    if(movieForm.value.id==null){
      this.cs.createMovie(movieForm.value).subscribe((response)=>{
        this.router.navigate(["/"]);
        window.location.reload(); //Esto es para que la pagina se recargue y se vea reflejado el nuevo registro
      })
    }else{
      this.cs.updateMovie(movieForm.value.id, movieForm.value).subscribe((response)=>{
        this.router.navigate(["/"]);
        window.location.reload();
      })
    }  
    
  }
}
