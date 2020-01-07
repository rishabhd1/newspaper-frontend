import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  arr: Array<string> = ['a', 'b', 'c'];

  constructor() { }

  ngOnInit() {
  }

  itemList() {
    console.log('HERE');
  }
}
