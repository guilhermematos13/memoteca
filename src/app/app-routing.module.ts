import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';
import { CreatThoughtsComponent } from './components/thoughts/creat-thoughts/creat-thoughts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'createThoughts',
    component: CreatThoughtsComponent
  },
  {
    path: '',
    component: ThoughtsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
