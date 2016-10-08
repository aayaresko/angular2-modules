import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Crisis } from './crisis';

@Injectable()
export class CrisisService {
    private crisisUrl = 'app/crisis';
    private headers = new Headers({ 'Content-type': 'application/json' });

    constructor(private http: Http) {
    }

    public findOneById(id: number): Promise<Crisis> {
        return this.all().then((data) => data.find((crisis) => crisis.id === id));
    }

    public all(): Promise<Crisis[]> {
        return this.http.get(this.crisisUrl)
            .toPromise()
            .then(response => response.json().data as Crisis[])
            .catch(this.handleError);
    }

    public update(crisis: Crisis): Promise<Crisis> {
        const url = `${this.crisisUrl}/${crisis.id}`;
        return this.http
            .put(url, JSON.stringify(crisis), { headers: this.headers })
            .toPromise()
            .then(() => crisis)
            .catch(this.handleError);
    }

    public create(name: string): Promise<Crisis> {
        return this.http
            .post(this.crisisUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    public delete(id: number): Promise<void> {
        let url = `${this.crisisUrl}/${id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
