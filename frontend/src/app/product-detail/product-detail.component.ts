import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ProductService } from '../services/product.service';

import { Product, ProductDetail, Price, ProductsResponse, Author } from '../models/product-related';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  product: ProductDetail;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // Route parameters are always strings. So the route parameter value is converted
    // to a number with the JavaScript (+) operator.
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProduct(params.get('id')))
      .subscribe(product => this.product = product.item);
  }

  formatNumber(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  goBack(): void {
    this.location.back();
  }

}
