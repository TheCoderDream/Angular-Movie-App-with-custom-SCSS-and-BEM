import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/Movie';
import {MovieApiService} from '../../services/movie-api.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input('movie') movie: Movie;
  @Input('clickable') clickable: boolean;
  genres: string;

  constructor(public movieApiService: MovieApiService) { }

  ngOnInit() {
    this.genres = this.movieApiService.getGenreListAsString(this.movie.genre_ids);
  }

}
