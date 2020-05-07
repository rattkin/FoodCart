import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { changeMealFilter } from '../actions/order.actions';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }


  menuFilter = new FormControl();


  select(filter) {
    this.store.dispatch(changeMealFilter({ filterType: filter }));
  }

  ngOnInit(): void {
  }

}
