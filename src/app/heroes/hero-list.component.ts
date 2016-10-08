import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
    public heroes: Hero[];
    private selectedId: number;

    public constructor(private service: HeroService, private route: Router, private router: ActivatedRoute) {
    }

    public ngOnInit() {
        this.router.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.service.getHeroes().then(heroes => this.heroes = heroes);
        });
    }

    public isSelected(hero: Hero) {
        return hero.id === this.selectedId;
    }

    public onSelect(hero: Hero) {
        this.route.navigate(['/hero', hero.id]);
    }
}
