import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../common/genre';

@Pipe({ name: 'getGenreName' })
export class GetGenreNamePipe implements PipeTransform {
    transform(value: number, genreArr: Array<Genre>): string {
        let genreFound: Genre;
        if (genreArr.length > 0) {
            genreFound = genreArr.find(genre => {
                return genre.id == value;
            });
            if (genreFound && genreFound.name) {
                return genreFound.name;
            }
        }
        return null;
    }
}