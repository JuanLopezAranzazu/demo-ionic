import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './../entities/post.entity';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private api = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAllPosts() {
    const path = `${this.api}/posts/`;
    return this.http.get<Post[]>(path);
  }
}
