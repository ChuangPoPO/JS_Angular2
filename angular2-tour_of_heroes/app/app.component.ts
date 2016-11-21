import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  
  <div>
    <label>id : </label>{{hero.id}}
  </div>
  
  <div>
    <label>name : </label>
    <input
      [(ngModel)] = "hero.name" placeholder="name">
  </div>
  `
})

export class AppComponent {

  title = 'Tour of Heroes';
  heroes = HEROES;
  //hero = 'Windstorm';
  // hero: Hero = {
  //    id: 1,
  //    name: 'Gaduo'
  //  };
  
 }

// hero property
 export class Hero {
   id: number;
   name: string;
 }

//The HEROES array is of type Hero
 const HEROES: Hero[] = [
   {id:11 , name: 'Mr. Chien'},
   {id:12 , name: 'Mrs. Super'},
   {id:13 , name: 'Dr. CV'},
   {id:14 , name: 'Mrs. PoPO'},
   {id:15 , name: 'Mr. Gaduo'},
   {id:16 , name: 'Mr. GG'},
   {id:17 , name: 'Mrs. vivian'},
   {id:18 , name: 'Mr. Kevin'},
   {id:19 , name: 'Mom'},
   {id:20 , name: 'papa'}
 ];