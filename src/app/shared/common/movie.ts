import { Genre } from "./genre";
import { OnInit } from "@angular/core";

export class Movie implements OnInit {
    public id: number;
    public video: boolean;
    public vote_count: number;
    public vote_average: number;
    public title: string;
    public popularity: number;
    public poster_path: string;
    public original_language: string;
    public original_title: string;
    public genre_ids: Array<number>;
    public genres: Array<Genre>;
    public backdrop_path: string;
    public adult: boolean;
    public overview: string;
    public release_date: string;

    constructor() {
        this.genres = [];
    }

    ngOnInit() {
        this.genres = [];
    }
}
