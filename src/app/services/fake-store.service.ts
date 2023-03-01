import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from '../users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FakeStoreService {

  constructor(private http: HttpClient) { }
  // Get all products
  getUrl = 'https://fakestoreapi.com/products';

  getProducts() {
    return this.http.get(this.getUrl);
  }

  getProductById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.getUrl}/` + id)
  }

}
