import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ProductDetail, ProductsResponse, ProductDetailResponse } from '../models/product-related';

import 'rxjs/add/operator/toPromise'; // to import the toPromise operator from the RxJS library

@Injectable()
export class ProductService {

  private apiServerUrl = '/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('[Error] Perdió su conexión a Internet o el servidor se encuentra offline.', error);
    return Promise.reject(error.message || error);
  }

  getProducts(query: string): Promise<ProductsResponse> {
    const url = `${this.apiServerUrl}/items?search=${query}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  getProduct(id: string): Promise<ProductDetailResponse> {
    const url = `${this.apiServerUrl}/items/${id}`
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
}
