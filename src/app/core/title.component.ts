import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {
    @Input() public subtitle = '';
    public title = 'Angular Modules';
    public user = '';

    public constructor(userService: UserService) {
        this.user = userService.getUserName();
    }

    public ngOnInit() {
    }

}
