import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CrisisService } from '../shared/crisis.service';
import { Crisis } from '../shared/crisis';

@Injectable()
export class CrisisDetailResolve implements Resolve<Crisis> {
    public constructor(private crisisService: CrisisService, private router: Router) {
    }

    public resolve(route: ActivatedRouteSnapshot): Promise<Crisis>|Promise<boolean> {
        let id = +route.params['id'];
        return this.crisisService.getCrisis(id).then(crisis => {
            if (crisis) {
                return crisis;
            } else {
                this.router.navigate(['/crisis-center']);
                return false;
            }
        });
    }

}