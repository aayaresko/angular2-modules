import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { UserService } from '../core/user.service';

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

    public constructor(private userService: UserService, private contactService: ContactService) {
        this.userName = this.userService.getUserName();
    }

    public ngOnInit() {
        this.contactService.getContacts().then((contacts) => {
            this.message = '';
            this.contacts = contacts;
            this.contact = this.contacts[0];
        });
    }

    public next() {
        let ix = 1 + this.contacts.indexOf(this.contact);
        if (ix >= this.contacts.length) {
            ix = 0;
        }
        this.contact = this.contacts[ix];
    }

    public onSubmit() {
        this.displayMessage(`Saved ${this.contact}`);
    }

    public newContact() {
        this.displayMessage('New contact');
        this.contact = { id: 42, name: '' };
        this.contacts.push(this.contact);
    }

    public displayMessage(message: string) {
        this.message = message;
        setTimeout(() => this.message = '', 1500);
    }

}
