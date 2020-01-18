import { Component, OnInit } from '@angular/core';

import { AllNews } from 'src/app/models/AllNews';
import { News } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  allNews: AllNews;
  news: Array<News>;

  constructor(private allNewsService: NewsService) {}

  ngOnInit() {}
}
