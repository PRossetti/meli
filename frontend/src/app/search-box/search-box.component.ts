import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {

  query: string = '';
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.query = this.dataService.getQuery();
  }

  goToResults(query: string): void {
    this.dataService.setQuery(query);
    if (query) {
      this.router.navigate(['items'], { queryParams: { search: query } });
    }
  }

}
