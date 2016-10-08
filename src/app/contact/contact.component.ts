import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    public contact: Contact;
    public contacts: Contact[];
    public message = 'Loading contacts...';
    public userName = '';

    public constructor(private userService: UserService) {
    }

    public ngOnInit() {
    }

}
