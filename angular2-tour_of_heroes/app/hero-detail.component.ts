import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
	selector: 'hero-detail',
	templateUrl: './app/hero-detail.component.html',
	styleUrls: ['./app/hero-detail.component.css'] 
})

export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;

	constructor(
		private heroService:HeroService,
		private route:ActivatedRoute,
		private location:Location
	){}

  ngOnInit(): void{
		this.route.params
		.switchMap((params:Params) => 
			{
				console.log(params);
				return this.heroService.getHero(+params['xyz'])
			}
		)
		.subscribe(hero => 
			{
				console.log(hero);
				this.hero = hero
			}
		); //印出來看看(params)=>{console.log(params['id'])...
  }

  //回到上一頁
  goBack():void{
	  this.location.back();
  }

}