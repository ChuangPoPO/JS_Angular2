import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroService} from './hero.service';


@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: `./dashboard.component.html`,
})


//implement the DashboardComponent
export class DashboardComponent{

	heroes: Hero[] = [];

	constructor ( private heroService: HeroService) {}

	ngOnInit(): void{
		this.heroService.getHeroes()
			.then ( heroes => this.heroes = heroes.slice(0,5) );
	}
}