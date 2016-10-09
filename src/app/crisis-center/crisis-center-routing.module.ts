import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: CrisisListComponent,
    },
    {
        path: ':id',
        component: CrisisDetailComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class CrisisCenterRoutingModule {
}
