import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private getCatsURL = `https://catfact.ninja/fact`;

  constructor(private http: HttpClient) {}

  getCats() {
    return this.http.get(`${this.getCatsURL}`);
  }

}
