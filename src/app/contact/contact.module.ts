import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactService } from './contact.service';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule,
    ],
    declarations: [ContactComponent],
    providers: [ContactService]
})
export class ContactModule {
}
