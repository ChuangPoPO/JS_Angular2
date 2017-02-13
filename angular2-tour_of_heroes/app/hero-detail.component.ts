import { Component, Input, OnChanges } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'my-hero-detail',
	template: `
		<div *ngIf = "hero">
			<h2>{{hero.name}} details !</h2>
			<div><label>id: </label>{{hero.id}}</div>
			<div>
				<label>name: </label>
				<input [(ngModel)] = "hero.name" placeholder = "name" />
			</div>
		</div>
	`
})

export class HeroDetailComponent implements OnChanges {
	@Input()
	hero: Hero;

  ngOnChanges(): void{
    console.debug("HeroDetailComponent Onchanges");
  }
}