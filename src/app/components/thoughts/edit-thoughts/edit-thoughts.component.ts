import { Router, ActivatedRoute } from '@angular/router';
import { ThoughtService } from './../thought.service';
import { Thoughts } from './../thoughts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.css']
})
export class EditThoughtsComponent implements OnInit {

  thoughts : Thoughts = {
    id: 0,
    content: '',
    authorship: '',
    model: ''
  }

  editThoughts() {
    this.service.edit(this.thoughts).subscribe(() => {
      this.router.navigate([''])
    })
  }

  cancelButton() {
    this.router.navigate([''])
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.searchById(parseInt(id!)).subscribe((thoughts) => {
      this.thoughts = thoughts
    })
  }

}
