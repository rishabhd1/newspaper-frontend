import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { NewsService } from '../../services/news.service';
import { AllNews } from 'src/app/models/AllNews';
import { News } from 'src/app/models/News';
import { Auth } from 'src/app/models/Auth';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() category: string;

  allNews: AllNews;
  news: Array<News>;
  user: Auth;

  constructor(private allNewsService: NewsService, private dialog: MatDialog) {}

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

    this.user = JSON.parse(localStorage.getItem('auth'));
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

  saveNews(id: string) {
    if (!this.user || !this.user.email) {
      this.openDialog();
    } else {
      const payload = {
        email: this.user.email,
        mongoID: id
      };
      this.allNewsService.saveNews(payload).subscribe(response => {
        if (response.status === 'success') {
          console.log('Saved');
        }
      });
      console.log(`HERE: ${id} and ${this.user.email}`);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }
}
