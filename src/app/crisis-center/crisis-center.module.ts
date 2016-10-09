import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisService } from './shared/crisis.service';

@NgModule({
    imports: [
        CommonModule,
        CrisisCenterRoutingModule
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent,
        CrisisListComponent,
    ],
    providers: [
        CrisisService,
    ]
})
export class CrisisCenterModule {
}
