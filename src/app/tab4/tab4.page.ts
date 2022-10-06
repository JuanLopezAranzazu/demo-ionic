import { Component, OnInit } from '@angular/core';
import { PostsService } from './../providers/posts.service';
import { Post } from './../entities/post.entity';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  posts: Post[] = [];
  postsFilter: Post[] = [];
  titleSearch: string;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.postsService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
      this.postsFilter = posts;
    });
  }

  getPostsSearch() {
    if (this.titleSearch) {
      this.postsFilter = this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.titleSearch.toLowerCase())
      );
    } else {
      this.postsFilter = this.posts;
    }
  }
}
