import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private query: string = '';

    getQuery(): string {
        return this.query;
    }

    setQuery(query: string) {
        this.query = query;
    }
}