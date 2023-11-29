import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../service/api-movies.service';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  // forma!:FormGroup;
  forma!:FormGroup;

  constructor(public cs:ApiMoviesService, private router:Router, private formBuilder:FormBuilder){
    // this.buildForm();
  }

  ngOnInit(): void{
    this.forma= new FormGroup({
      title: new FormGroup ('', Validators.required),
      synopsis: new FormGroup ('', Validators.required),
      year: new FormGroup ('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      cover: new FormGroup ('', Validators.required)
    });
  }  

  submitForm(movieForm:NgForm){  
    if(movieForm.value.id==null){      
      this.cs.createMovie(movieForm.value).subscribe((response)=>{
        this.router.navigate(["/peliculas"]);       
      })
    }else{      
      this.cs.updateMovie(movieForm.value.id, movieForm.value).subscribe((response)=>{
        this.router.navigate(["/peliculas"]);        
      })
    }      
  }

  // Para validar formulario
  // private buildForm(){
  //   this.movieForm = this.formBuilder.group({
  //     title:['', Validators.required],
  //     synopsis:['', Validators.required],
  //     year:['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
  //     cover:['', Validators.required]
  //   });
  //   this.movieForm.valueChanges
  //   .pipe(debounceTime(500)
  //   )
  //   .subscribe(value=>{
  //     console.log(value);
  //   });
  // }
}
