import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/Movie';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('move', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => left',
        [
          style({transform: 'translateX(100%)'}),
          animate(5000)
        ]),
      transition('void => right',
        [
          style({transform: 'translateX(-100%)'}),
          animate(5000)
        ]),
      transition('right => void', [
        animate(5000, style({transform: 'translateX(0)'}))
      ]),
      transition('left => void', [
        animate(5000, style({transform: 'translateX(0)'}))
      ]),
    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input('movies') movies: Movie[];

  selectedMovie: Movie;
  state = 'void';
  disableSliderButtons = false;

  constructor() {
  }

  ngOnInit() {
    this.movies = this.movies.slice();
  }

  moveRight() {
    console.log('move right');
    this.state = 'left';
    this.imageRotate(this.movies, false);
  }

  moveLeft() {
    this.state = 'right';
    this.imageRotate(this.movies, true);
  }

  onStart() {
    this.disableSliderButtons = true;
  }

  onFinish() {
    this.disableSliderButtons = false;
    this.state = 'void';
  }

  imageRotate(arr, reverse) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  }


}
