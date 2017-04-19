import {Injectable} from '@angular/core';

import {Hero} from './hero'; //取得Hero型態
import {HEROES} from './mock-heroes'; //匯入HEROES陣列中的資料

@Injectable()

export class HeroService {

	getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
    }

	getHero(id:number): Promise <Hero> {
		return this.getHeroes()
		.then(heroes => heroes.find(hero => hero.id === id));
	} //stub


	//讓資料取得時間變長
	// getHeroesSlowly(): Promise<Hero[]> {
  	// 	return new Promise(
	//   	resolve => {
	//     	// Simulate server latency with 2 second delay
	//     	setTimeout(() => resolve(this.getHeroes()), 2000);
  	// 	});
  	// }
}