import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../models/Actor';
import {MovieApiService} from '../../services/movie-api.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  @Input('actor') actor: Actor;
  constructor(public movieApiService: MovieApiService) { }

  ngOnInit() {
  }

}
