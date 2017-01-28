import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent} from './hero-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule //讓表單輸入支援雙向資料綁定
    ],

  declarations: [
    AppComponent,
    HeroDetailComponent 
    ],
    
  bootstrap: [ AppComponent ]
})

export class AppModule { }