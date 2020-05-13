import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { pickSideDish } from '../actions/order.actions';
import { Meal } from '../interfaces/meal';

@Component({
  selector: 'app-pick-heat',
  templateUrl: './pick-heat.component.html',
  styleUrls: ['./pick-heat.component.css']
})
export class PickHeatComponent implements OnInit {

  public chosenHeat = 0;
  public dish: Meal;
  constructor(
    private store: Store<any>,
    public DialogRef: MatDialogRef<PickHeatComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dish = data.dish;
  }

  ngOnInit(): void {
  }

  heat(direction: string) {
    if (direction === '+') {
      this.chosenHeat = this.chosenHeat + 1;
    } else {
      this.chosenHeat = this.chosenHeat - 1;
    }
  }

  cancel() {
    this.DialogRef.close();
  }

  order() {
    this.store.dispatch(pickSideDish({ item: { ...this.dish, chosenHeat: this.chosenHeat } }));
    this.DialogRef.close();
  }

}
