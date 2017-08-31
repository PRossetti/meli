import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProductService } from '../services/product.service';

import { ProductsResponse, Product } from '../models/product-related';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {

  products: ProductsResponse;
  constructor(
    private productService: ProductService,
    // private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.productService.getProducts(params.get('query')))
    //   .subscribe(products => this.products = products.items);

    this.route
      .queryParams
      .subscribe(params => {
        if (params['search']) {
          this.productService.getProducts(params['search'])
            .then(products => this.products = products);
        }
      });

  }

  formatNumber(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  // goToProductDetail(id: string): void {
  //   this.router.navigate(['/items', id]);
  // }

}
