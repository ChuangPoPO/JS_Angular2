import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


//@Component 必須寫在 export class AppComponent{}之前
//@Component 是註記 AppComponent 是一個 Component
@Component({
  selector: 'my-heroes',
  templateUrl: './app/heroes.component.html',
  styleUrls: ['./app/heroes.component.css'],

 //providers: [HeroService]
})


export class HeroesComponent implements OnInit, OnChanges {

  heroes: Hero[];

  //沒有給定初始值，是在使用者選擇後才被傳入，型態為Hero
  selectedHero: Hero;


  //建構出HeroService服務，以heroService為名作為注入點
  constructor(
    private heroService: HeroService,
    private router: Router){}


  //使用HeroService內的服務
  //因為 service 回應的 Primes 物件是非同步的(不是馬上回應的)
  //所以需要用 lambda 的方式取得資料，Lambda "a => a"
  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    
    //讓資料取得時間變長
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }


  //在一開始時便呼叫getHeroes來取得資料
  ngOnInit(): void{
    this.getHeroes();
  }


  ngOnChanges(): void{
    console.debug("OnChanges");
  }


  //被選取的hero存為selectedHero
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }


  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

 }