import { ThoughtService } from './../thought.service';
import { Thoughts } from './../thoughts';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-thoughts',
  templateUrl: './creat-thoughts.component.html',
  styleUrls: ['./creat-thoughts.component.css']
})
export class CreatThoughtsComponent implements OnInit {


  thoughts: Thoughts = {
    content: "",
    authorship: "",
    model: '',
  }

  constructor(
    private service: ThoughtService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createThoughts() {
    this.service.create(this.thoughts).subscribe(() => {
      this.router.navigate([''])
    })
  }

  cancelButton() {
    this.router.navigate([''])
  }

}
