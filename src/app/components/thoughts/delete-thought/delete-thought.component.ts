import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from './../thought.service';
import { Thoughts } from './../thoughts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  thoughts: Thoughts = {
    id: 0,
    content: '',
    authorship: '',
    model: ''
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

  deleteThoughts() {
    if(this.thoughts.id) {
      this.service.delete(this.thoughts.id).subscribe(() => {
        this.router.navigate([''])
      })
    }
  }

  cancel() {
    this.router.navigate([''])
  }

}

//   thoughts: Thoughts = {
//     id: 0,
//     content: '',
//     authorship: '',
//     model: '',
//   }
//   constructor(
//     private service: ThoughtService,
//     private router: Router,
//     private route: ActivatedRoute

//     ) { }

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id')
//     this.service.searchById(parseInt(id!)).subscribe((thoughts) => {
//       this.thoughts = thoughts
//     })
//   }

//   deleteThoughts() {
//     if(this.thoughts.id){
//       this.service.delete(this.thoughts.id).subscribe(() => {
//         this.router.navigate([''])
//       })
//     }
//   }

//   cancel() {
//     this.router.navigate([''])
//   }

// }
