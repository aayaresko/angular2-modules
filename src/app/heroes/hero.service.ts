import { Injectable } from '@angular/core';
import { Hero } from './hero';

const heroesList: Hero[] = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];

const fetchLatency = 500;

@Injectable()
export class HeroService {
    public getHeroes() {
        return new Promise<Hero[]>((resolve) => {
            setTimeout(() => {
                resolve(heroesList);
            }, fetchLatency);
        });
    }

    public getHero(id: number | string) {
        return this.getHeroes().then((heroes) => heroes.find((hero) => hero.id === +id));
    }
}
