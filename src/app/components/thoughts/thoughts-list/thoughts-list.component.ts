import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css']
})
export class ThoughtsListComponent implements OnInit {

  thoughtsList = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, sem ac",
    authorship: "Ipsum",
    model: 'model3'
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, sem ac",
    authorship: "Ipsum",
    model: 'model2'
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, sem ac volutpat scelerisque, nisi nulla congue augue, quis molestie augue libero ac tellus. Sed quis consequat lorem, id sodales libero. Praesent imperdiet sagittis fermentum. Praesent condimentum nulla non lacus hendrerit lobortis. Nam sodales velit at augue bibendum ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In tincidunt, nulla vel ultricies ornare, ipsum odio dignissim lacus, id tincidunt enim libero vehicula augue. ",
    authorship: "Ipsum",
    model: 'model2'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
