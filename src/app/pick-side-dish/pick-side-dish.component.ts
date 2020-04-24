import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { selectSideDishes } from '../state/selectors';
import { addToOrder } from '../actions/order.actions';
import { Meal } from '../interfaces/meal';

@Component({
  selector: 'app-pick-side-dish',
  templateUrl: './pick-side-dish.component.html',
  styleUrls: ['./pick-side-dish.component.css']
})
export class PickSideDishComponent implements OnInit {
  public sideDishes = this.store.pipe(select(selectSideDishes));
  public chosenSideDish: Meal;
  public dish: Meal;

  constructor(
    private store: Store<any>,
    public DialogRef: MatDialogRef<PickSideDishComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dish = data.dish;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store.dispatch(addToOrder({ item: this.dish, sideDish: this.chosenSideDish }));
    this.DialogRef.close();
  }

  checkClose() {
    this.DialogRef.close();
  }

}
