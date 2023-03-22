import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Thoughts } from './thoughts';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts'

  constructor(private http: HttpClient) { }

  list(): Observable<Thoughts[]> {
    return this.http.get<Thoughts[]>(this.API)
  }

  create(thoughts : Thoughts): Observable<Thoughts> {
    return this.http.post<Thoughts>(this.API, thoughts)
  }


}
