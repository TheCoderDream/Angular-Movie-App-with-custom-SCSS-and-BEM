import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/Movie';
import {MovieApiService} from '../../services/movie-api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input('movie') movie: Movie;
  constructor(public movieApiService: MovieApiService) { }

  ngOnInit() {

  }

}
