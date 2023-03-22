import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-thoughts',
  templateUrl: './card-thoughts.component.html',
  styleUrls: ['./card-thoughts.component.css']
})
export class CardThoughtsComponent implements OnInit {

  @Input() thought = {
    content: "Lorem Ipsum",
    authorship: "Ipsum",
    model: 'model3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  widthThoughts(): string {
    if(this.thought.content.length >= 256) {
      return 'thought-g'
    }
    return 'thought-p'
  }

}
