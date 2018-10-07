import { Movie } from "./movie";

export class MovieDBResponse {
    results: Array<Movie>;
    total_results: number;

    constructor(parameters) {
        this.results = [];
        this.total_results = 0;
    }
}