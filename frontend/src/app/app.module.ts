import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProductService } from './services/product.service';
import { DataService } from './services/data.service';
import { CommonService } from './services/common.service';

import { RoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultsComponent,
    ProductDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductService, DataService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
