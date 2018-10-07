import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  private filters: any;

  @Output() filtersEvent = new EventEmitter<any>();

  @Input()
  set filtersList(filtersList: any) {
    this.filters = filtersList
  }
  constructor() { }

  ngOnInit() {
  }
  onselectedFiltersControlChanged(value: any) {
    this.filtersEvent.emit(value.selectedOptions.selected);
  }
}
