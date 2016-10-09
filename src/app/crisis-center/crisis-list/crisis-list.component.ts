import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../shared/crisis.service';
import { Crisis } from '../shared/crisis';

@Component({
    templateUrl: './crisis-list.component.html',
})
export class CrisisListComponent implements OnInit {
    public crises: Promise<Crisis[]>;

    public constructor(private crisisService: CrisisService) {
    }

    public ngOnInit() {
        this.crises = this.crisisService.getCrises();
    }

}
