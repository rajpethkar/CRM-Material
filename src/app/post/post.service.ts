import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './post';

import { Observable } from 'rxjs'
@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost> {
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts`)
  }
}