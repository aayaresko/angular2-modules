import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero';

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
