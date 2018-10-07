import { Injectable } from "@angular/core";
import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movie } from '../common/movie';
import { Genre } from '../common/genre';
import { MovieDBResponse } from "../common/response";
import { AppSettings } from '../../constants/constants';

@Injectable()
export class TheMovieDBService {
  language: string = 'en-US';

  private movies$: Array<Movie>;
  private genres$ = new BehaviorSubject<Genre[]>([]);
  total_results: number;

  constructor(private http: HttpClient) {
  }

  getMovies(page?: string): Observable<MovieDBResponse> {
    return this.http.get<any>(AppSettings.THE_MOVIE_DB + 'movie/now_playing?api_key=' + AppSettings.API_KEY + '&language=en-US&page=' + page);
  }
  getGeneres(): Observable<any> {
    return this.http.get<any>(AppSettings.THE_MOVIE_DB + 'genre/movie/list?api_key=' + AppSettings.API_KEY + '&language=' + this.language);
  }

  public get getMoviesList$() { return this.movies$; }
  public get genresList$() { return this.genres$; }

}
