import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
    {
        path: '',
        component: HeroesComponent,
        children: [
            { path: '', component: HeroListComponent },
            { path: ':id', component: HeroDetailComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroRoutingModule {
}
