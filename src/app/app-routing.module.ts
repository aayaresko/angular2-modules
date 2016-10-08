import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full'},
    { path: 'crisis', loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule' },
    { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
