import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from './post.service';
import { MatSort, MatTableDataSource } from '@angular/material';

import { IPost } from './post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  ELEMENT_DATA: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'title', 'body'];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.ELEMENT_DATA = data;
      this.ELEMENT_DATA.sort = this.sort;
    })
  }

}

