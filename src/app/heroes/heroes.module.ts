import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list.component';
import { HeroRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
        HeroListComponent
    ],
    providers: [
        HeroService
    ]
})
export class HeroesModule {
}
