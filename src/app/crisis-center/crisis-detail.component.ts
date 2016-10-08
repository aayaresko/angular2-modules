import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
})

export class CrisisDetailComponent implements OnInit {
    public id: number;

    public constructor(private route: ActivatedRoute) {

    }

    public ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.params['id'], 10);
    }

}
