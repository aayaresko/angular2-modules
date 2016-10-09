import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeroRoutingModule } from './heroes-routing.module';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';

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
