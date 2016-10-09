import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
    public heroes: Promise<Hero[]>;

    public constructor(private heroService: HeroService) {
    }

    public ngOnInit() {
        this.heroes = this.heroService.getHeroes();
    }
}
