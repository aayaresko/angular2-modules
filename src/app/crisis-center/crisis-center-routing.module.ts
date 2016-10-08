import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { CrisisDetailResolve } from './crisis-detail-resolve.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: '/crisis-center',
                pathMatch: 'full'
            },
            {
                path: 'crisis-center',
                component: CrisisCenterComponent,
                children: [
                    {
                        path: '',
                        component: CrisisListComponent,
                        children: [
                            {
                                path: ':id',
                                component: CrisisDetailComponent,
                                canDeactivate: [CanDeactivateGuard],
                                resolve: {
                                    crisis: CrisisDetailResolve
                                }
                            },
                            {
                                path: '',
                                component: CrisisCenterHomeComponent
                            }
                        ]
                    }
                ]
            },
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CrisisDetailResolve
    ]
})
export class CrisisCenterRoutingModule {
}
