import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Movie } from '../../shared/common/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: []
})
export class MoviesComponent implements OnInit {
  private movies: Array<Movie>;
  private genres: any;

  @Input()
  set moviesList(moviesList: Array<Movie>) {
    this.movies = moviesList;
  }

  @Input()
  set genresList(genresList: any) {
    this.genres = genresList;
  }

  constructor() {
    this.movies = [];
    this.genres = [];
  }

  ngOnInit() { }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.movies.length > 0 && this.genres.length > 0) {
      let genres = this.genres;
      this.movies.forEach(movie => {
        movie.genres = [];
        movie.genre_ids.forEach(id => {


          let index = genres.findIndex(function (genre) {
            return genre.id === id;
          });

          movie.genres.push(genres[index]);
          /*
          movie.genres.push(genres.filter(genre => {
            return genre.id === id;
          }));
          */
        });
      })
    }

  }
}
