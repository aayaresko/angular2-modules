import { Injectable } from '@angular/core';
import { Contact } from './contact';

const contactsList: Contact[] = [
    new Contact(21, 'Sam Spade'),
    new Contact(22, 'Nick Danger'),
    new Contact(23, 'Nancy Drew'),
];

const fetchLatency = 500;

@Injectable()
export class ContactService {

    public constructor() {
    }

    public getContacts() {
        return new Promise<Contact[]>((resolve) => {
            setTimeout(() => {
                resolve(contactsList);
            }, fetchLatency);
        });
    }

    public getContact(id: number) {
        return this.getContacts()
            .then((contacts) => contacts.find((contact) => contact.id === id));
    }
}
