import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  private filters: any;
  public ratingValue: number;
  @Output() filtersEvent = new EventEmitter<any>();
  @Output() ratingFilter = new EventEmitter<any>();

  @Input()
  set filtersList(filtersList: any) {
    this.filters = filtersList
  }
  constructor() {
    this.ratingValue = 3;
  }

  ngOnInit() {
  }
  onselectedFiltersControlChanged(value: any) {
    this.filtersEvent.emit(value.selectedOptions.selected);
  }

  ratingFilterEmitter(event: any) {
    this.ratingValue = event.value;
    this.ratingFilter.emit(event.value);
  }
}
