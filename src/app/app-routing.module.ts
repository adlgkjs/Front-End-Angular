import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { AppComponent } from './app.component';

const routes: Routes = [ //Esta ruta lleva por defecto al componente principal, es el componente que se crea con el proyecto Angular
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
