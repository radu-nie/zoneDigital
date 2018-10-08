import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, Directive } from '@angular/core';
import { TheMovieDBService } from './shared/service/themoviedb.service';

class MockTheMovieDBService extends TheMovieDBService {
}

describe('AppComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: TheMovieDBService, useClass: MockTheMovieDBService },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create a component', async(() => {
    expect(component).toBeTruthy();
  }));


  it('should run #ngOnInit()', async(() => {
    // const result = component.ngOnInit();
  }));

  it('should run #getMovies()', async(() => {
    // const result = component.getMovies(pageEvent);
  }));

  it('should run #getGenres()', async(() => {
    // const result = component.getGenres();
  }));

  it('should run #recieveGenreFilters()', async(() => {
    // const result = component.recieveGenreFilters($event);
  }));

  it('should run #ratingFilter()', async(() => {
    // const result = component.ratingFilter($event);
  }));

  it('should run #applyFilters()', async(() => {
    // const result = component.applyFilters();
  }));

  it('should run #applyFilter()', async(() => {
    // const result = component.applyFilter(type, filteringOptions);
  }));

  it('should run #filterByRating()', async(() => {
    // const result = component.filterByRating();
  }));

  it('should run #filterMovieList()', async(() => {
    // const result = component.filterMovieList(newMovieFilters);
  }));

  it('should run #intersect()', async(() => {
    // const result = component.intersect(heystackArray, keyArray);
  }));

  it('should run #sort()', async(() => {
    // const result = component.sort(arr, property);
  }));

});
