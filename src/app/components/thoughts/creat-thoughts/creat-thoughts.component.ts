import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-thoughts',
  templateUrl: './creat-thoughts.component.html',
  styleUrls: ['./creat-thoughts.component.css']
})
export class CreatThoughtsComponent implements OnInit {


  thoughts = {
    id: '1',
    content: "",
    authorship: "",
    model: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThoughts() {
    alert("novo pensamento")
  }

}
