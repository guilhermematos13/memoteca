import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css']
})
export class ThoughtsListComponent implements OnInit {

  thoughtsList = [ {
    content: "Espelho espelho meu",
    authorship: "Ipsum",
    model: 'model3'
  },
  {
    content: "Espelho meu",
    authorship: "Ipsum",
    model: 'model2'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
