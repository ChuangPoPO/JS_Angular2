import { Component } from '@angular/core';
import { Hero } from './hero';
import { OnInit } from '@angular/core';


//@Component 必須寫在 export class AppComponent{}之前
//@Component 是註記 AppComponent 是一個 Component
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <h2> My Heroes </h2>

    <ul class="heroes">

    <!-- 當hero是selectedHero時，便套上selected這個css -->
    <!-- 當滑鼠點某個hero時，便將這個hero傳入onSelect方法 -->
    <!-- 每個hero會套badge這個css，在這顯示-->

      <li *ngFor = "let hero of heroes"
          [class.selected] = "hero === selectedHero"
          (click) = "onSelect(hero)">

        <span class="badge">{{hero.id}}</span>{{hero.name}}

      </li>
    </ul>


    <!-- 呼叫 my-hero-detail component 用[hero]傳入selectedHero -->
    <!-- hero-detail.component.ts 會用 @Input() 來接收這個selectedHero-->
    <!-- 並assign給hero-detail.component.ts 內的 hero-->
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,

 styles:[`
  .selected{
    background-color: #CFD8DC !important;
    color: white;
  }



  .heroes{
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }

  .heroes li{
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }

  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  
  .heroes .text {
    position: relative;
    top: -3px;
  }
  
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
 `],

 providers: [HeroService]
})

export class AppComponent implement OnInit {

  title = 'Tour of Heroes';
  heroes:Hero[];

  //沒有給定初始值，是在使用者選擇後才被傳入 ，型態為Hero
  selectedHero: Hero; 

  //建構出HeroService服務，以heroService為名作為注入點
  constructor(private heroService: HeroService){}

  //使用HeroService內的服務
  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

 }