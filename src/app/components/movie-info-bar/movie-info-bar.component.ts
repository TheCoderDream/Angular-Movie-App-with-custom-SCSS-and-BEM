import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-info-bar',
  templateUrl: './movie-info-bar.component.html',
  styleUrls: ['./movie-info-bar.component.scss']
})
export class MovieInfoBarComponent implements OnInit {

  @Input('time') time;
  @Input('revenue') revenue;
  @Input('budget') budget;
  constructor() { }

  ngOnInit() {
  }

}
