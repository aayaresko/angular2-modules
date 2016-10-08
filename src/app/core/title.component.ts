import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {
    @Input() public subtitle = '';
    public title = 'Angular Modules';
    public user;

    public constructor(private userService: UserService) {
    }

    public ngOnInit() {
    }

}
