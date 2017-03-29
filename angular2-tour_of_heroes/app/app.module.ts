import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, //讓表單輸入支援雙向資料綁定
		AppRoutingModule
  ],

  //For Angular recognizes the <my-heroes> tags
  declarations: [
	AppComponent,
	DashboardComponent,
 	HeroDetailComponent,
	HeroesComponent
  ],
  
  providers: [
    HeroService
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule {
	
}