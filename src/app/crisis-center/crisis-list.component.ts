import { Component, OnInit } from '@angular/core';
import { CrisisService } from './crisis.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Crisis } from './crisis';

@Component({
    templateUrl: './crisis-list.component.html',
})
export class CrisisListComponent implements OnInit {
    public crises: Crisis[];
    public selectedId: number;

    public constructor(private crisisService: CrisisService, private router: Router, private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.selectedId = params['id'];
            this.crisisService.all().then((crises) => this.crises = crises);
        });
    }

    public isSelected(crisis: Crisis) {
        return crisis.id === this.selectedId;
    }

    public onSelect(crisis: Crisis) {
        this.selectedId = crisis.id;
        this.router.navigate([crisis.id], { relativeTo: this.route });
    }
}
