import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list.component';
import { HeroRoutingModule } from './heroes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
