import { Injectable } from "@angular/core";
import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movie } from '../common/movie';
import { Genre } from '../common/genre';
import { MovieDBResponse } from "../common/response";

const THE_MOVIE_DB: string = 'https://api.themoviedb.org/3/';
const API_KEY = '2bbb8cfd733ab114a8cf0116520d3ca3';

@Injectable()
export class ThemoviedbService {
  language: string = 'en-US';

  private movies$: Array<Movie>;
  private genres$ = new BehaviorSubject<Genre[]>([]);
  private uniqueGenresIds: Array<number>[];
  total_results: number;

  constructor(private http: HttpClient) {
    //this.loadMovies();
    this.uniqueGenresIds = [];
  }

  getMovies(page?: string): Observable<MovieDBResponse> {
    return this.http.get<MovieDBResponse>(THE_MOVIE_DB + 'movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=' + page);
  }
  getGeneres(): Observable<any> {
    return this.http.get<any>(THE_MOVIE_DB + 'genre/movie/list?api_key=' + API_KEY + '&language=' + this.language);
  }

  public get getMoviesList$() { return this.movies$; }
  public get genresList$() { return this.genres$; }

  // loadMovies(page?: string) {

  //   this.getMovies(page).subscribe(data => {

  //     this.movies$ = data.results;
  //     this.total_results = data.total_results;
  //     data.results.map(movie => {
  //       this.uniqueGenresIds.push(...movie.genre_ids);
  //     });

  //     this.uniqueGenresIds = [...new Set(this.uniqueGenresIds)];

  //     this.loadGenres();
  //   },
  //     er => { },
  //     () => { })

  // }

  // loadGenres() {

  //   this.getGeneres().subscribe(data => {

  //     let uniqueGenres = data.genres.filter(element => {
  //       return this.uniqueGenresIds.indexOf(element.id) > 0;
  //     });

  //     this.genres$.next(uniqueGenres);

  //   },
  //     er => { },
  //     () => { })

  // }
}
