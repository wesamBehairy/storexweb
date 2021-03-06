import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { NoAuthGuard } from './auth/no-auth.guard';
import { EditDeleteMovieComponent } from './edit-delete-movie/edit-delete-movie.component';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent, canActivate: [NoAuthGuard] },
  { path: "login", component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: "createMovie", component: CreateMovieComponent, canActivate: [AuthGuard] },
  { path: "EditDeleteMovie/:id", component: EditDeleteMovieComponent, canActivate: [AuthGuard] },
  { path: "browseMovies", component: BrowseMoviesComponent, canActivate: [AuthGuard] },

  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
