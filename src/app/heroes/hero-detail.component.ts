import { Component, OnInit, trigger, transition, animate, style, state, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.1s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ]),
        ]),
    ]
})

export class HeroDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    public hero: Hero;

    public constructor(private route: ActivatedRoute, private router: Router, private service: HeroService) {
    }

    public ngOnInit(): void {
        // access to dynamically changable value of router parameters
        /*this.route.params.forEach((params: Params) => {
         let id = +params['id']; // converts string to a number
         this.service.getHero(id).then(hero => this.hero = hero);
         });*/
        // access to initial value of the route parameters (static)
        let id = +this.route.snapshot.params['id'];
        this.service.getHero(id).then((hero) => this.hero = hero);
    }

    public gotoHeroes() {
        let heroId = this.hero ? this.hero.id : null;
        // this.router.navigate(['/heroes']);
        // this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
        this.router.navigate(['/heroes', { id: heroId }]);
    }

    public save() {
        this.service.update(this.hero).then(this.gotoHeroes);
    }
}
