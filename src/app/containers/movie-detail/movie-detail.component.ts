import { Component, OnInit } from '@angular/core';
import {MovieApiService} from '../../services/movie-api.service';
import {ActivatedRoute} from '@angular/router';
import {MovieDetail} from '../../models/MovieDetail';
import {Actor} from '../../models/Actor';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieId;
  movieDetail: MovieDetail;
  actors: Actor[];
  constructor(public movieApiService: MovieApiService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    this.movieApiService.getMovie(this.movieId).subscribe((data: MovieDetail) => {
      this.movieDetail  = data;

    });
    this.movieApiService.getActors(this.movieId).subscribe(data => {
      this.actors = data.cast;
      console.log(data);
    });

  }

}
