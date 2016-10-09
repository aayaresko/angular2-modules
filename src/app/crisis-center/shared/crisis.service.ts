import { Injectable } from '@angular/core';
import { Crisis } from './crisis';

const crisisList: Crisis[] = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

const fetchLatency = 500;

@Injectable()
export class CrisisService {

    public getCrises() {
        return new Promise<Crisis[]>((resolve) => {
            setTimeout(() => {
                resolve(crisisList);
            }, fetchLatency);
        });
    }

    public getCrisis(id: number | string) {
        return this.getCrises().then((crises) => crises.find((crisis) => crisis.id === +id));
    }
}
