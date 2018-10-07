import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemoviedbService } from './shared/service/themoviedb.service';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Movie } from './shared/common/movie';

const FILTER_TYPE = {
  "RATING": 1,
  "GENRE": 2
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThemoviedbService]
})
export class AppComponent implements OnInit {
  moviesList: any = [];
  moviesListFiltered: any = [];
  currentMovies: any = [];
  genres: any = [];
  length = 0;
  pageSize = 20;
  ratingFilterValue: any = 3;
  newMovieFilters: Array<any> = [];

  private uniqueGenresIds: Array<number>;

  constructor(private dataService: ThemoviedbService) {
    this.moviesList = [];
    this.moviesListFiltered = [];
    this.currentMovies = [];
    this.uniqueGenresIds = [];
  }

  ngOnInit() {
    this.getMovies(null);
    this.getGenres();
  }
  //REMEMBER: PAGINATION does not include filtering!! not suported by api
  getMovies(pageEvent: PageEvent) {

    this.dataService.getMovies(pageEvent ? (pageEvent.pageIndex + 1 + '') : null).subscribe(data => {
      this.moviesList = this.sort(data.results, 'popularity');
      this.moviesListFiltered = this.sort(data.results, 'popularity');
      // Set length for paginator
      this.length = data.total_results;

      data.results.map(movie => {
        this.uniqueGenresIds.push(...movie.genre_ids);
      });

      this.uniqueGenresIds = [...new Set(this.uniqueGenresIds)];

    });
  }

  getGenres() {
    this.dataService.getGeneres().subscribe(data => {

      let uniqueGenres = data.genres.filter(element => {
        return this.uniqueGenresIds.includes(element.id);
      });
      this.genres = uniqueGenres;
    });

  }

  // Method triggered by emitter
  recieveFilters($event) {
    this.newMovieFilters = [];

    $event.forEach(filter => {
      // Create array of id to filter movies
      this.newMovieFilters.push(filter.value.id);
    });

    this.applyFilter(FILTER_TYPE.GENRE, this.newMovieFilters);
    this.applyFilter(FILTER_TYPE.RATING, this.ratingFilterValue);

    this.moviesListFiltered = this.currentMovies;
  }

  ratingFilter($event) {
    this.ratingFilterValue = $event.value;
    this.applyFilter(FILTER_TYPE.GENRE, this.newMovieFilters);
    this.applyFilter(FILTER_TYPE.RATING, this.ratingFilterValue);

    this.moviesListFiltered = this.currentMovies;
  }

  applyFilter(type, filteringOptions: any) {
    switch (type) {
      case 2:
        if (filteringOptions instanceof Array) {
          this.filterMovieList(filteringOptions);
        }
        break;
      case 1:
        this.filterByRating();
        break;
      default:
        break;
    }
  }

  filterByRating() {

    if (this.currentMovies.length == 0) {
      this.moviesListFiltered = this.moviesList;
    }
    let temp = this.currentMovies.filter(movie => {
      return movie.vote_average >= this.ratingFilterValue;
    });

    this.currentMovies = temp;
  }

  filterMovieList(newMovieFilters: any[]) {
    // Reset filtered movies
    //this.moviesListFiltered = [];

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

