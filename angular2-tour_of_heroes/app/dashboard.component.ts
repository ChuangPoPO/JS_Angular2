import { Component,OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService} from './hero.service';


@Component({
	//moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: './app/dashboard.component.html',
	styleUrls: ['./app/dashboard.component.css']
})


//implement the DashboardComponent
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor ( private heroService: HeroService) {}

	ngOnInit(): void{
		this.heroService.getHeroes()
			.then ( heroes => this.heroes = heroes.slice(0,5) );
	}
}