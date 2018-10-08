import { TestBed, inject, async } from '@angular/core/testing';
import { TheMovieDBService } from './themoviedb.service';

describe('TheMovieDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheMovieDBService]
    });
  });

  it('should be created', inject([TheMovieDBService], (service: TheMovieDBService) => {
    expect(service).toBeTruthy();
  }));
  it('should run #getMovies()', async((service: TheMovieDBService) => {
    const result = service.getMovies();
  }));

  it('should run #getGeneres()', async((service: TheMovieDBService) => {
    const result = service.getGeneres();
  }));
});
