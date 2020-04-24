import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectOrder, selectOrderTotal } from '../state/selectors';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { showOrder } from '../actions/order.actions';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public order = this.store.pipe(select(selectOrder));
  public total = this.store.pipe(select(selectOrderTotal));

  constructor(
    private store: Store<any>,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  showOrder() {
    this.store.dispatch(showOrder());
  }

  sendOrder() {
    console.log('send');


    // TODO config
    return (this.http.post('https://rattkin.info/mail.php', { mailData: 'frank', age: 10 }))
      .subscribe(
        map(res => {
          console.log(res);

          return res;
        }),
      );
  }

}
