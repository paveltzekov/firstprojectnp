import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Greet} from "./greet";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  testCall() {
    return this.http.get<Greet>('http://localhost:8080/hello-world');
  }
}
