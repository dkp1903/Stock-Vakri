import { Component, OnInit } from '@angular/core';
import { LiveNewsService } from '../../services/live-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[LiveNewsService]

})
export class NewsComponent implements OnInit {
  // Catches the response
  news;
  types = [];
  type: string = 'stocks';
  query;
  constructor(private liveNewsService: LiveNewsService) { }

  ngOnInit(): void {

    this.types = ['stocks', 'finance', 'corona', 'Wall-street'];

    this.news = {articles: []};

    // Default type
    this.getQueriedNews('stocks');

  }

  catcher(event: any){
    this.getQueriedNews(event);
  }

  addQuery(){
    this.types.push(this.query);
  }

  getQueriedNews(val){

    // Fetching the live data from the Live news service
    this.liveNewsService.getNews(val)
  		.subscribe(
  			response => this.news = response
    );

  }

  }


