import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TheMovieDBService } from './shared/service/themoviedb.service';
import { PageEvent } from '@angular/material';
import { AppSettings, FILTER_TYPE } from './constants/constants';
import { Movie } from './shared/common/movie';
import { Genre } from './shared/common/genre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TheMovieDBService]
})

export class AppComponent implements OnInit {
  public moviesList: Array<Movie>;
  public moviesListFiltered: Array<Movie>;
  public currentMovies: Array<Movie>;
  public genres: Array<Genre>;
  public newMovieFilters: Array<any>;
  public sidenavOpened: boolean;
  public length: number;
  public pageSize: number;
  public ratingFilterValue: number;

  private uniqueGenresIds: Array<number>;

  constructor(private tmdbService: TheMovieDBService) {
    // Default initalization
    this.moviesList = [];
    this.moviesListFiltered = [];
    this.currentMovies = [];
    this.uniqueGenresIds = [];
    this.genres = [];
    this.newMovieFilters = [];

    this.length = 0;
    this.pageSize = 20;
    this.ratingFilterValue = 3;

    this.sidenavOpened = true;
  }

  ngOnInit() {
    // First action
    this.getMovies(null);
  }

  // REMEMBER: PAGINATION does not include filtering!! not suported by api
  getMovies(pageEvent: PageEvent) {
    this.tmdbService.getMovies(pageEvent ? (pageEvent.pageIndex + 1 + '') : null).subscribe(data => {
      // Add genres to movies
      data.results.map(resp => {
        resp.genres = [];
      });

      let sortedData = this.sort(data.results, 'popularity');
      this.moviesList = sortedData;
      this.moviesListFiltered = sortedData;
      // Set length for paginator
      this.length = data.total_results;

      sortedData.map(movie => {
        // Add all genre id's available
        this.uniqueGenresIds.push(...movie.genre_ids);
      });
      // Setter for uniqueGeneres filtrered by available movies genres
      this.uniqueGenresIds = [...new Set(this.uniqueGenresIds)];
      // Get genres after movies to map needed info      
      this.getGenres();

    });
  }

  getGenres() {
    this.tmdbService.getGeneres().subscribe(data => {
      // Select only available movie genres from dataset
      let uniqueGenres = data.genres.filter(element => {
        // Check for existence in movie object -> genre_ids
        return this.uniqueGenresIds.includes(element.id);
      });
      // Setter for genres -> also triggers input on filters check filters component
      this.genres = uniqueGenres;
    });

  }

  // Method triggered by emitter
  recieveGenreFilters($event) {
    this.newMovieFilters = [];

    $event.forEach(filter => {
      // Create array of id to filter movies
      this.newMovieFilters.push(filter.value.id);
    });

    this.applyFilters();
  }

  ratingFilter($event) {
    // Setter for filters    
    this.ratingFilterValue = $event;
    this.applyFilters();
  }

  applyFilters() {
    // Apply filters in this order (Genre, Rating)
    this.applyFilter(FILTER_TYPE.GENRE, this.newMovieFilters);
    this.applyFilter(FILTER_TYPE.RATING, this.ratingFilterValue);
    this.moviesListFiltered = this.currentMovies;
  }

  applyFilter(type: FILTER_TYPE, filteringOptions: any) {
    switch (type) {
      case FILTER_TYPE.GENRE.valueOf():
        if (filteringOptions instanceof Array) {
          this.filterMovieList(filteringOptions);
        }
        break;
      case FILTER_TYPE.RATING.valueOf():
        this.filterByRating();
        break;
      default:
        break;
    }
  }

  filterByRating() {
    // Reset filtered movies if no current movies
    if (this.currentMovies.length == 0) {
      this.moviesListFiltered = this.moviesList;
    }
    // Create temporary variable that currentMovies will be filtered
    let temp = this.currentMovies.filter(movie => {
      return movie.vote_average >= this.ratingFilterValue;
    });
    // Set current movies
    this.currentMovies = temp;
  }

  filterMovieList(newMovieFilters: any[]) {
    // Reset filtered movies if no current movies
    if (this.currentMovies.length == 0) {
      this.moviesListFiltered = this.moviesList;
    }
    // Filter movies genres to intersect with filters
    this.currentMovies = this.moviesList.filter(movie => {
      //intersect values 
      let commonvalues = this.intersect(movie.genre_ids, newMovieFilters);
      // Returns matched Arrays (business logic)
      return JSON.stringify(newMovieFilters.sort()) === JSON.stringify(commonvalues.sort())
    });

    // If no filters, reset filtered movies to default list of movies
    if (newMovieFilters.length == 0) {
      this.currentMovies = this.moviesList;
    }
  }

  // Helper methods
  intersect(heystackArray, keyArray): Array<any> {
    return heystackArray.filter(arr => { return keyArray.includes(arr) })
  }

  sort(arr: any[], property: string) {
    let sortedArr: any[];
    sortedArr = arr.slice(0);
    sortedArr.sort((leftSide, rightSide): number => {
      if (leftSide[property] < rightSide[property]) return 1;
      if (leftSide[property] > rightSide[property]) return -1;
      return 0;
    });

    return sortedArr;
  }
}

