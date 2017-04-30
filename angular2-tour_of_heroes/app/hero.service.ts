import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Hero} from './hero'; //取得Hero型態


@Injectable()

export class HeroService {

	private heroesUrl = 'api/heroes';//https://api.myjson.com/bins/ot3yb'; //URL to web api

	constructor(private http:Http){}

	getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
	.toPromise()
	.then(response => response.json().data as Hero[])
	.catch(this.handleError);
    }

	private handleError(error:any):Promise<any>{
		console.error('An error occurred', error); //for demo purouses only
		return Promise.reject(error.message || error);
	}

	//Get hero by id
	getHero(id:number): Promise <Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
		.toPromise()
		.then(response => response.json().data as Hero)
		.catch(this.handleError);
	} //stub
}