import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieApiService} from '../../services/movie-api.service';
import {Movie} from '../../models/Movie';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movies: Movie[];
  moviesForSlide: Movie[];
  setTimeoutID = null;
  title = 'Top Movies';
  currentPage = 1;
  firstMovie;
  scrollFetchDisabled = false;

  constructor(
    public movieApiService: MovieApiService,
    public loadingService: LoadingService
  ) {
  }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      // window.innerHeight + window.scrollY >= document.body.offsetHeight
      if (!this.scrollFetchDisabled) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          this.scrollFetchDisabled = true;
          this.loadingService.loadingState.next(true);
          setTimeout(() => {
            this.movieApiService.getMoviesByPage(this.currentPage + 1).subscribe(data => {
              this.scrollFetchDisabled = false;
              this.currentPage++;
              this.loadingService.loadingState.next(false);
              console.log(data.results);
              this.movies = [...this.movies, ...data.results];
            });
          }, 2000);
        }
      }
    });
    this.loadingService.loadingState.next(true);
    this.movieApiService.getMovies().subscribe(data => {
      this.loadingService.loadingState.next(false);
      this.movies = data.results;
      this.moviesForSlide = data.results.slice();
    });
  }


  onSearchMovie(value: string): void {
    clearTimeout(this.setTimeoutID);

    this.setTimeoutID = setTimeout(() => {
      this.loadingService.loadingState.next(true);

      if (!value) {
        this.movieApiService.getMovies().subscribe(data => {
          this.loadingService.loadingState.next(false);
          this.title = 'Top Movies';
          this.movies = data.results;
        });
        return;
      }
      this.movieApiService.searchMovies(value).subscribe((data) => {
        this.loadingService.loadingState.next(false);
        this.title = 'Search Result';
        this.movies = data.results;
      });
    }, 500);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', (e) => {
      console.log('scroll removed');
    });
  }

}
