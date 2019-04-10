import { Component, OnInit } from '@angular/core';
import { News } from '../News';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  
  private newsList: News[];

  constructor(private newsService: NewsService) { 
    this.newsList = [];
  }

  ngOnInit() {
    this.newsService.getNewsList().subscribe(newsList => this.newsList = newsList);
  }
}

