import { Component, OnInit, Input } from '@angular/core';

import { NewsService } from '../../services/news.service';
import { AllNews } from 'src/app/models/AllNews';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() category: string;

  allNews: AllNews;
  news: Array<News>;

  constructor(private allNewsService: NewsService) { }

  ngOnInit() {
    switch (this.category) {
      case 'allNews':
        this.getAllNews();
        break;

      case 'business':
        this.getBusinessNews();
        break;

      case 'sports':
        this.getSportsNews();
        break;

      case 'entertainment':
        this.getEntertainmentNews();
        break;

      case 'mostViewed':
        this.getMostViewedNews();
        break;

      default:
        break;
    }
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
      this.news = this.allNews.body;
    });
  }

  getSportsNews() {
    this.allNewsService.getSportsNews().subscribe(response => {
      this.allNews = response;
      this.news = this.allNews.body;
    });
  }

  getEntertainmentNews() {
    this.allNewsService.getEntertainmentNews().subscribe(response => {
      this.allNews = response;
      this.news = this.allNews.body;
    });
  }

  getMostViewedNews() {
    this.allNewsService.getMostViewedNews().subscribe(response => {
      this.allNews = response;
      this.news = this.allNews.body;
    });
  }

  openNews(URL: string, id: string) {
    window.open(URL, '_blank');
    this.allNewsService.increamentClickCount(id).subscribe();
  }
}
