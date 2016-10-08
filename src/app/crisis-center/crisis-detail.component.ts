import { Component, OnInit, trigger, transition, animate, style, state, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CrisisService } from './crisis.service';
import { Crisis } from './crisis';
import { DialogService } from '../dialog-service';

@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styles: ['input {width: 20em}'],
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

export class CrisisDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    public crisis: Crisis;
    public editName: string;

    constructor(private service: CrisisService,
                private route: ActivatedRoute,
                private router: Router,
                private dialogService: DialogService) {
    }

    public ngOnInit(): void {
        // access to dynamically changable value of router parameters
        /*this.route.params.forEach((params: Params) => {
            let id = +params['id']; // converts the string to a number
            this.service.findOneById(id).then((crisis) => this.crisis = crisis);
        });*/
        this.route.data.forEach((data: { crisis: Crisis }) => {
            this.editName = data.crisis.name;
            this.crisis = data.crisis;
        });
    }

    public save() {
        this.crisis.name = this.editName;
        this.service.update(this.crisis).then(this.gotoCrisis);
    }

    public canDeactivate(): Promise<boolean> | boolean {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');
    }

    public gotoCrisis() {
        let crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
    }
}
