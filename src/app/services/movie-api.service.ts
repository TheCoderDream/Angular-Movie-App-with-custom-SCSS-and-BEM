import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {genres as genreList} from './genres';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private API_URL = 'https://api.themoviedb.org/3/';
  private API_KEY = 'de2ce901ec120769d784410335f67638';
  private IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
  private BACKDROP_SIZE = 'w1280';
  private POSTER_SIZE = 'w500';

  constructor(private http: HttpClient) {
  }

  public getMovies(): Observable<any> {
    return this.http.get(`${this.API_URL}movie/popular?api_key=${this.API_KEY}&language=en-US&page=1`);
  }
  public getMovie(movieId: string): Observable<any> {
    return this.http.get(`${this.API_URL}movie/${movieId}?api_key=${this.API_KEY}&language=en-US`);
  }

  public getActors(movieId: string): Observable<any> {
    return this.http.get(`${this.API_URL}movie/${movieId}/credits?api_key=${this.API_KEY}`);
  }

  public getMoviesByPage(page: number): Observable<any> {
    return this.http.get(`${this.API_URL}movie/popular?api_key=${this.API_KEY}&language=en-US&page=${page}`);
  }

  public searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(`${this.API_URL}search/movie?api_key=${this.API_KEY}&language=en-US&query=${searchTerm}`);
  }

  public getMainImagePath(path: string): string {
    return `${this.IMAGE_BASE_URL}${this.BACKDROP_SIZE}${path}`;
  }

  public getMoviePoster(posterPath: string): string {
    return `${this.IMAGE_BASE_URL}${this.POSTER_SIZE}${posterPath}`;
  }

  public getGenreListAsString(genres: Array<number>): string {
    const result = genres.map(genre => genreList[genre]);

    return result.slice(0, 2).join(', ');
  }


}
