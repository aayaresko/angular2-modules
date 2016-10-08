import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisService } from './crisis.service';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
