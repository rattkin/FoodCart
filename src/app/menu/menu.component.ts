import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectMenu } from '../state/selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu = this.store.pipe(select(selectMenu));

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
