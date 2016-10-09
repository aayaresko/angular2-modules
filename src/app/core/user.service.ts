import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
    userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
    public id = nextId++;
    private userName = 'Sherlock Holmes';

    public constructor(@Optional() config: UserServiceConfig) {
        if (config) {
            this.userName = config.userName;
        }
    }

    public getUserName() {
        const suffix = this.id > 1 ? `times ${this.id}` : '';
        return this.userName + suffix;
    }
}
