import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private getCatsURL = `https://catfact.ninja/fact`;
  private getDogURL = `https://dog.ceo/api/breeds/image/random`;

  constructor(private http: HttpClient) {}

  getCats() {
    return this.http.get(`${this.getCatsURL}`);
  }

  getDog() {
    return this.http.get(`${this.getDogURL}`);
  }
}
