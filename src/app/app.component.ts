import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemoviedbService } from './shared/service/themoviedb.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThemoviedbService]
})
export class AppComponent implements OnInit {
  moviesList: any = [];
  genres: any = [];
  //@Output() movieList = new EventEmitter<Array<any>>();

  constructor(private tms: ThemoviedbService) { }

  ngOnInit() {
    this.getNowPlaying();
    this.getGenres();
  }

  getNowPlaying(page?: string) {
    this.tms.getNowPlaying(page).subscribe(data => {
      this.moviesList = data.results;
      //this.movieList.emit(this.movies);
    });
  }

  getGenres() {
    this.tms.getGeneres().subscribe(data => {
      this.genres = data.genres;
    });
  }
}

