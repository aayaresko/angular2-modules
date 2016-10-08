import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { UserService, UserServiceConfig } from './user.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TitleComponent
    ],
    exports: [
        TitleComponent
    ],
    providers: [
        UserService
    ]
})
export class CoreModule {

    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        };
    }

    public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core module is already loaded. Import it in the AppModule only');
        }
    }
}
