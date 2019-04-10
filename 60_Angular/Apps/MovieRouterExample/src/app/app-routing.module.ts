import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoginComponent } from './login/login.component';
import { UnderConstructionComponent} from './under-construction/under-construction.component';

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-detail/:Title', component: MovieDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
  { path: '**', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
