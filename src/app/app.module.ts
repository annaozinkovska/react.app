import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from 'src/title/title.component';
import { PostComponent } from 'src/post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
