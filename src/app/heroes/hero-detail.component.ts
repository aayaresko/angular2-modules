import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {
    public hero: Hero;

    public constructor(private route: ActivatedRoute, private heroService: HeroService) {
    }

    public ngOnInit(): void {
        let id = parseInt(this.route.snapshot.params['id']);
        this.heroService.getHero(id).then((hero) => this.hero = hero);
    }
}
