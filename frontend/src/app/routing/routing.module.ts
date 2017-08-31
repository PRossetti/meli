import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { SearchBoxComponent } from '../search-box/search-box.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', component: SearchBoxComponent },
  { path: 'items/:id', component: ProductDetailComponent },
  { path: 'items', component: SearchResultsComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: 'notFound' }
];

@NgModule({
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
