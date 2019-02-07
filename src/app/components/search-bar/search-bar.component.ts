import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output('searchTermChanged') searchTermChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSearchTermChange(val: string): void {
    this.searchTermChange.emit(val);
  }

}
