import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thoughts } from '../thoughts';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css']
})
export class ThoughtsListComponent implements OnInit {

  thoughtsList: Thoughts[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.list().subscribe((thoughtsList) => {
      this.thoughtsList = thoughtsList
    })
  }

}
