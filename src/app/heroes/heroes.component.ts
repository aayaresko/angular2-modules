import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    public constructor(private heroService: HeroService, private router: Router) {
    }

    public ngOnInit(): void {
        this.getHeroes();
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    public add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    public delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(item => item !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            });
    }
}