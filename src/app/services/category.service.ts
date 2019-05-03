import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private rest = 'http://localhost:1234/rest/';  // URL to web api

  constructor(private http: HttpClient) { }

  getArticles (): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:5000/')
  }
}
