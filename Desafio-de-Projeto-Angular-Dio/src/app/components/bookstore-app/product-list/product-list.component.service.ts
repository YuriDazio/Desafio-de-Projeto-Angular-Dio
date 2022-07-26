import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from "./model/book";

@Injectable()

export class BookService{
    private url = 'https://localhost:44382/api/bookstore';

    httpOpitions={
            Headers: new HttpHeaders ({'Content-Type': 'application/json'}),
    }

    constructor(private http: HttpClient){}

    getBooks(){
        return this.http.get(this.url)
    }
}