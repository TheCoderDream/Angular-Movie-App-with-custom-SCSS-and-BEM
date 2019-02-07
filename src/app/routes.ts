import {Routes} from '@angular/router';
import {MovieListComponent} from './containers/movie-list/movie-list.component';
import {MovieDetailComponent} from './containers/movie-detail/movie-detail.component';

export const routes: Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'movies/:id', component: MovieDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: '/movies'}
];
