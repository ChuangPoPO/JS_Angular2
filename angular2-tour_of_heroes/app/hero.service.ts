import {Injectable} from '@angular/core';

import {Hero} from './hero'; //取得Hero型態
import {HEROES} from './mock-heroes'; //匯入HEROES陣列中的資料

@Injectable()

export class HeroService {
	getHeroes(): Hero[] {
		return HEROES;
	} //stub
}