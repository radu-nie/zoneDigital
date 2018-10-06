import { Injectable } from "@angular/core";
import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

const THE_MOVIE_DB: string = 'https://api.themoviedb.org/3/';
const API_KEY = '2bbb8cfd733ab114a8cf0116520d3ca3';
@Injectable()
export class ThemoviedbService {
  language: string = 'en-US';

  constructor(private http: HttpClient) { }

  getNowPlaying(page?: string): Observable<any> {
    return this.http.get<any>(THE_MOVIE_DB + 'movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=' + page, httpOptions);
  }
  getGeneres(): Observable<any> {
    return this.http.get<any>(THE_MOVIE_DB + 'genre/movie/list?api_key=' + API_KEY + '&language=' + this.language);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
