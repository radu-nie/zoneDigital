import { Injectable, OnInit } from "@angular/core";
import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

export const remoteURL: string = 'https://api.themoviedb.org/3/';
//authentication/token/new?api_key=2bbb8cfd733ab114a8cf0116520d3ca3

@Injectable()
export class TokenService implements OnInit {
    constructor( private http: HttpClient){

    }
    ngOnInit() {        
        this.getTempToken()
    }


    async getTempToken(){
        const response = await this.http.get(remoteURL + 'authentication/token/new?api_key=2bbb8cfd733ab114a8cf0116520d3ca3', httpOptions);        
        return response;
    }
}

const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json'
    })
}