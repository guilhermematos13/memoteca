import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatThoughtsComponent } from './components/thoughts/creat-thoughts/creat-thoughts.component';
import { FormsModule } from '@angular/forms';
import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';
import { CardThoughtsComponent } from './components/thoughts/card-thoughts/card-thoughts.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtsComponent } from './components/thoughts/edit-thoughts/edit-thoughts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreatThoughtsComponent,
    ThoughtsListComponent,
    CardThoughtsComponent,
    DeleteThoughtComponent,
    EditThoughtsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
