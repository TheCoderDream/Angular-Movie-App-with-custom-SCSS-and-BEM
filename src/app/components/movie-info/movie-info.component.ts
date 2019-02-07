import {Component, Input, OnInit} from '@angular/core';
import {MovieApiService} from '../../services/movie-api.service';
import {Movie} from '../../models/Movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  @Input('movie') movie: Movie;
  @Input('directors') directors;
  constructor(public movieApiService: MovieApiService) { }

  ngOnInit() {
  }

}
