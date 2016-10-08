import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
    public userName = '';

    public constructor(userService: UserService) {
        this.userName = userService.userName;
    }

    public ngOnInit() {

    }
}
