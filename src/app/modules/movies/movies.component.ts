import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: []
})
export class MoviesComponent implements OnInit {
  private movies: any;

  @Input()
  set moviesList(moviesList: any) {
    this.movies = moviesList
  }

  constructor() { }

  ngOnInit() { }

}
