import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../common/genre';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
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