import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from '../../shared/common/movie';
import { AppSettings } from '../../constants/constants';
import { Genre } from '../../shared/common/genre';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: []
})


export class MoviesComponent implements OnInit {
  private movies: Array<Movie>;
  private genres: Array<Genre>;
  public moviedbImageUrl = AppSettings.MOVIEDB_IMAGE_URL;

  @Input()
  set moviesList(moviesList: Array<Movie>) {
    this.movies = moviesList;
    this.mapGenresToMovies();
  }
  get movieList(): Array<Movie> {
    return this.movies;
  }

  @Input()
  set genresList(genresList: Array<Genre>) {
    this.genres = genresList;
    this.mapGenresToMovies();
  }
  get genresList(): Array<Genre> {
    return this.genres;
  }

  constructor() {
    this.movies = [];
    this.genres = [];
  }

  ngOnInit() { }

  mapGenresToMovies() {
    if (this.movies.length > 0 && this.genres.length > 0) {
      let genres = this.genres;
      this.movies.forEach(movie => {
        //movie.genres = [];
        movie.genre_ids.forEach(id => {
          let index = genres.findIndex(function (genre) {
            return genre.id === id;
          });

          movie.genres.push(genres[index]);
        });
      })
    }
  }
}
