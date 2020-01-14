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
  businsessNews: Array<News>;
  sportsNews: Array<News>;
  entertainmentNews: Array<News>;

  constructor(private allNewsService: NewsService) {}

  ngOnInit() {
    this.getAllNews();
    this.getBusinessNews();
    this.getSportsNews();
    this.getEntertainmentNews();
  }

  getAllNews() {
    this.allNewsService.getAllNews().subscribe(response => {
      this.allNews = response;
      this.news = this.allNews.body;
    });
  }

  getBusinessNews() {
    this.allNewsService.getBusinessNews().subscribe(response => {
      this.allNews = response;
      this.businsessNews = this.allNews.body;
    });
  }

  getSportsNews() {
    this.allNewsService.getSportsNews().subscribe(response => {
      this.allNews = response;
      this.sportsNews = this.allNews.body;
    });
  }

  getEntertainmentNews() {
    this.allNewsService.getEntertainmentNews().subscribe(response => {
      this.allNews = response;
      this.entertainmentNews = this.allNews.body;
    });
  }

  openNews(URL: string, id: string) {
    window.open(URL, '_blank');
    this.allNewsService.increamentClickCount(id).subscribe();
  }
}
