import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  private filters: any;

  @Input()
  set filtersList(filtersList: any) {
    this.filters = filtersList
  }
  constructor() { }

  ngOnInit() {
  }
  //selectedFilters.selectedOptions.selected
}
